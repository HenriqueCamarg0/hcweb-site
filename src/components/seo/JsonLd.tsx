import { EMPRESA } from "@/config/empresa";
import {
  getOrganizationSchema,
  getWebSiteSchema,
  getFaqSchema,
  getServiceSchema,
} from "./schemas";

export function JsonLd() {
  const baseUrl = process.env["NEXT_PUBLIC_SITE_URL"] || EMPRESA.dominio;

  const organizationSchema = getOrganizationSchema(baseUrl);
  const websiteSchema = getWebSiteSchema(baseUrl);
  const faqSchema = getFaqSchema();
  const serviceSchema = getServiceSchema(baseUrl);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [organizationSchema, faqSchema, serviceSchema, websiteSchema],
          }),
        }}
      />
    </>
  );
}
