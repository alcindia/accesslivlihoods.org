import React from "react";
import PartnerSection from "./PartnerSection";
import ProgramSection from "./ProgramSection";

const Resources = () => {
  return (
    <>
      <PartnerSection
        title="Partners"
        buttonText="Producer Collectives"
        buttonLink="https://www.alcindia.org/partners/"
        images={[
          "https://www.alcindia.org/assets/partner-thumbnail-45-f1fa0b5bb1289e2c459b402b1f720b71.jpg",
          "https://www.alcindia.org/assets/partner-thumbnail-44-412d1c3e748ea02b700bb31b0da2f783.jpg",
          // Add more images
        ]}
      />

      <PartnerSection
        title="Government Departments"
        buttonText="Government Departments"
        buttonLink="https://www.alcindia.org/partners/"
        images={[
          "https://www.alcindia.org/assets/partner-thumbnail-13-b104c4730431f5dcdf2f728f6911ae0f.jpg",
          "https://www.alcindia.org/assets/partner-thumbnail-19-567a0def5a4a27b728414674db57c4ad.jpg",
          // Add more images
        ]}
      />

      {/* Add more PartnerSections */}
      <ProgramSection
        title="Farmers' Enterprise Program"
        description="In partnership with SFAC, ALC India is in Andhra Pradesh, Karnataka and Maharashtra to promote Producer Companies of Small and Marginal Farmers."
        buttonText="More"
        buttonColor="bg-amber-400"
      />

      <ProgramSection
        title="Artisan Enterprise Program"
        description="In partnership with SERP, Government of Andhra Pradesh, ALC India is promoting a Producer Company of women weavers in Mandapeta of East Godavari district."
        buttonText="More"
        buttonColor="bg-amber-400"
      />
    </>
  );
};

export default Resources;
