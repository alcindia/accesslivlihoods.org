import React from "react";
import ServiceCard from "./ServicesCard";
import SectionHeader from "./SectionHeader";
import InnovationsContent from "./InnovationsContent";
import img1 from "../../images/AlfJourney/BeehiveModel.png";
import img2 from "../../images/AlfJourney/PartnerSales.png";
import img3 from "../../images/AlfJourney/Shaping Livelihoods.jpg";

const Innovations = () => {
  return (
    <>
      <div id="services" className="bg-gray-100 md:max-w-[80rem]">
        <SectionHeader
          title=""
          subtitle="We strongly believe significant transformation in livelihoods takes long-term systemic engagement that addresses different elements of the livelihood ecosystem in an integrated manner. However, the journey of change often begins with a single step. Therefore we offer our services at two levels-"
        />

        <div className="px-2" data-aos="fade-down" data-aos-delay="600">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <ServiceCard
              imageSrc={img1}
              title="Community Program Services"
              description="ALC India's Community Services involve the design and delivery of an integrated package of services that focus on individual communities such as Farmers, Weavers, Livestock Holders, Forest Produce Gatherers (mostly Tribals) and Vulnerable Communities. Here, the service models are designed around the livelihoods needs of the community, enabling them to take up significant activities for enterprise creation (in the form of producer companies and other collectives). ALC India has partnered different government agencies like SFAC, NABARD and SERP to promote a total of 14 producer companies in Andhra Pradesh, Karnataka, Maharashtra and Telangana."
            />

            <ServiceCard
              imageSrc={img2}
              title="Partner Program Services"
              description="ALC India's Partner Services focuses on needs that people's enterprises, government agencies, NGOs, corporates and foundations, have in specific domains such as Livelihoods Mapping, Business Design, HR, Value Chain Analysis and Skill Development. Here, the services are offered to meet the specific needs of the partner organisation."
            />

            <ServiceCard
              imageSrc={img3}
              title="Shaping Livelihoods Environments Services"
              description="ecosystems can thrive only in environments that enable their sustenance and growth. We aim to ensure this through our platforms. ALC India is currently engaged in creating platforms that focus on finance of livelihoods, human resources required for the livelihoods sector, knowledge for practitioners in the livelihoods sector and a platform for the communities who are the ultimate stakeholders."
            />
          </div>
        </div>
      </div>

      <div id="services" className="bg-gray-100 py-4">
        <div
          className="m-auto max-w-full p-2 md:p-4 h-full flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="zoom-out"
        >
          <InnovationsContent />
        </div>
      </div>

      {/* <hr /> */}

      {/* <SectionHeader
        title="Partner Program Services"
        subtitle="ALC India delivers a wide range of services across domains (including Business Design, Raising and Managing Finances, Programme and Project Management, Institution Building, HR, Communication) to producer enterprises, government agencies or departments, NGOs, donors or funding agencies, private sector, CSR divisions and academic institutions."
      /> */}

      {/* <InnovationsContent /> */}
    </>
  );
};

export default Innovations;
