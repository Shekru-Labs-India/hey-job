import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const JobMeta = ({ job }) => {
  if (!job) return null;

  // Format currency to Indian format
  const formatSalary = (salary) => {
    if (!salary) return 'Not Disclosed';
    return `${salary}+ LPA`;
  };

  // Format date to ISO string
  const formatDate = (date) => {
    if (!date) return new Date().toISOString();
    return new Date(date).toISOString();
  };

  // Generate meta description
  const getMetaDescription = () => {
    return `${job.jobTitle} job opportunity at ${job.companyName}. Salary: ${formatSalary(job.package)}. Location: ${job.location}. Experience: ${job.experience} years. Apply now for this ${job.jobType} position on HeyJob!`;
  };

  // Generate canonical URL
  const getCanonicalUrl = () => {
    const formattedTitle = job.jobTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    return `https://shekru-labs-india.github.io/heyjob_website/#/job-detail/${formattedTitle}/${job.id}`;
  };

  // Default company logo
  const defaultLogo = 'https://shekru-labs-india.github.io/heyjob_website/assets/img/logo.png';
  const companyLogo = job.companyLogo || defaultLogo;

  // Generate structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.jobTitle,
    "description": job.description || getMetaDescription(),
    "datePosted": formatDate(job.postedDate),
    "validThrough": formatDate(job.validThrough),
    "employmentType": job.jobType || "FULL_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.companyName,
      "logo": companyLogo,
      "sameAs": job.companyWebsite || ""
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location,
        "addressRegion": job.state || "",
        "addressCountry": "IN"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.package || 0,
        "maxValue": job.maxPackage || job.package || 0,
        "unitText": "YEAR"
      }
    },
    "experienceRequirements": {
      "@type": "OccupationalExperienceRequirements",
      "monthsOfExperience": (job.experience || 0) * 12
    },
    "qualifications": job.qualification || "",
    "skills": job.skills || [],
    "industry": job.industry || ""
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{`${job.jobTitle} at ${job.companyName} | ${formatSalary(job.package)} | HeyJob`}</title>
      <meta name="description" content={getMetaDescription()} />
      <meta name="keywords" content={`${job.jobTitle}, ${job.companyName}, jobs, career, ${job.location}, ${job.skills?.join(', ')}`} />
      <link rel="canonical" href={getCanonicalUrl()} />

      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={`${job.jobTitle} at ${job.companyName}`} />
      <meta property="og:description" content={getMetaDescription()} />
      <meta property="og:image" content={companyLogo} />
      <meta property="og:image:alt" content={`${job.companyName} logo`} />
      <meta property="og:url" content={getCanonicalUrl()} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="HeyJob" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@heyjob" />
      <meta name="twitter:title" content={`${job.jobTitle} at ${job.companyName}`} />
      <meta name="twitter:description" content={getMetaDescription()} />
      <meta name="twitter:image" content={companyLogo} />
      <meta name="twitter:image:alt" content={`${job.companyName} logo`} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="HeyJob" />
      <meta name="application-name" content="HeyJob" />

      {/* Job-specific Meta Tags */}
      <meta name="job_title" content={job.jobTitle} />
      <meta name="salary" content={formatSalary(job.package)} />
      <meta name="company" content={job.companyName} />
      <meta name="location" content={job.location} />
      <meta name="employment_type" content={job.jobType} />
      <meta name="experience_required" content={`${job.experience} years`} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

JobMeta.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    companyLogo: PropTypes.string,
    companyWebsite: PropTypes.string,
    location: PropTypes.string.isRequired,
    state: PropTypes.string,
    package: PropTypes.number,
    maxPackage: PropTypes.number,
    experience: PropTypes.number,
    jobType: PropTypes.string,
    description: PropTypes.string,
    qualification: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    industry: PropTypes.string,
    postedDate: PropTypes.string,
    validThrough: PropTypes.string
  }).isRequired
};

export default JobMeta; 