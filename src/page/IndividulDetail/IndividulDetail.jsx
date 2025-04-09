import React from "react";
import {
    SERVICE_TITLE,
    MAIN_SERVICES_TITLE,
    SERVICE_DATA,
    FINANCE_BANKING_TITLE,
    FINANCE_BANKING_SERVICE,
    PERSONAL_SERVICES_TITLE,
    PERSONAL_SERVICES_DESCRIPTION,
    PERSONAL_SERVICES_SERVICE,
} from "../../const/service";
import "../../asset/css/ServiceComponent.css";
import Button from "../../components/ui/Button";

function IndividulDetail() {
    return (
        <>
            <div className="core-services">
                <div className="service-title">{SERVICE_TITLE}</div>
                <div className="main-services">{MAIN_SERVICES_TITLE}</div>
                <div className="service-list">
                    {SERVICE_DATA.map((service, index) => (
                        <div className="service-item" key={index}>
                            <img src={service.image} alt={service.alt} />
                            <div className="service-name">{service.name}</div>
                            <Button text={service.buttonText} className="view-more"></Button>
                        </div>
                    ))}
                </div>

                <div className="finance-banking">
                    <div className="finance-banking-title">{FINANCE_BANKING_TITLE}</div>
                    <div className="finance-banking-service">
                        <img src={FINANCE_BANKING_SERVICE.image} alt={FINANCE_BANKING_SERVICE.alt} />
                        <div className="finance-banking-service-name">{FINANCE_BANKING_SERVICE.name}</div>
                        <Button text={FINANCE_BANKING_SERVICE.buttonText} className="view-more"></Button>
                    </div>
                </div>

                <div className="personal-services">
                    <div className="personal-services-title">{PERSONAL_SERVICES_TITLE}</div>
                    <div className="personal-services-description">{PERSONAL_SERVICES_DESCRIPTION}</div>
                    <div className="personal-services-service">
                        <img src={PERSONAL_SERVICES_SERVICE.image} alt={PERSONAL_SERVICES_SERVICE.alt} />
                        <div className="personal-services-service-name">{PERSONAL_SERVICES_SERVICE.name}</div>
                        <Button text={PERSONAL_SERVICES_SERVICE.buttonText} className="view-more"></Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IndividulDetail;