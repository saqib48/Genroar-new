// pages/orders.js
import DashboardLayout from "@/components/molecules/Dashboardlayout";
import AccountData from "@/components/organisms/AccountData";
import Footer from "@/components/organisms/Footer";
import Headermain from "@/components/organisms/Headermain";

const DownloadPage = () => {
    return (
        <div>

            <DashboardLayout>
                <h1 className="text-2xl font-bold">Download</h1>
                <div className="w-full mt-[15px]">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="w-full text-sm leading-normal text-center text-gray-600 uppercase bg-gray-200" >
                                <th className="px-6 py-3 text-center">Product</th>
                                <th className="px-6 py-3 text-center">Downloads</th>
                                <th className="px-6 py-3 text-center">Expires</th>

                                <th className="px-6 py-3 text-center">Download</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-light text-gray-600">
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="px-6 py-3 text-center whitespace-nowrap">Shopnovilla - Free Real Estate PSD <br /> Template</td>
                                <td className="px-6 py-3 text-left">May 10, 2022</td>
                                <td className="px-6 py-3 text-left">Expired	</td>

                                <td className="px-6 py-3 text-center text-orange-500 cursor-pointer hover:underline">	Click Here To Download Your <br /> File</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="px-6 py-3 text-left whitespace-nowrap">Organic - Ecommerce Html Template	</td>
                                <td className="px-6 py-3 text-left">Sep 11, 2022	</td>
                                <td className="px-6 py-3 text-left">Never</td>

                                <td className="px-6 py-3 text-center text-orange-500 cursor-pointer hover:underline">	Click Here To Download Your <br /> File</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DashboardLayout>

        </div>
    );
};

export default DownloadPage;
