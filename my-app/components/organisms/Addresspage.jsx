// pages/orders.js
import DashboardLayout from "@/components/molecules/Dashboardlayout";
import Paragraph from "../atoms/Paragraph";
import Heading from "../atoms/Heading";
import AnchorTag from "../atoms/anchorTag";

const AddressPage = () => {
    return (
        <div>

            <DashboardLayout>
                <div className="pb-[5px]">
                    <Paragraph>The following addresses will be used on the checkout page by default.</Paragraph>
                </div>
                <div className="my-[5px]"> <Heading level="4">Billing Address</Heading></div>
                <div> <AnchorTag variant="check">Edit</AnchorTag></div>
                <div className="mb-[10px]">
                    <Heading level="11">Bobby Jackson</Heading>
                </div>

                <div className="mb-[10m] flex flex-col">
                    <Heading level="12">House #15</Heading>
                    <Heading level="12">Road #8</Heading>
                    <Heading level="12">Your address</Heading>
                    <Heading level="12">goes here</Heading>
                    <Heading level="4">1212</Heading>
                </div>
                <Paragraph>New York</Paragraph>









            </DashboardLayout>

        </div>
    );
};

export default AddressPage;
