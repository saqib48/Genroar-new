// pages/orders.js
import DashboardLayout from "@/components/molecules/Dashboardlayout";


const OrderPage = () => {
    return (
        <div>

            <DashboardLayout>
                <h1 className="text-2xl font-bold">Orders</h1>
                <div className="w-full mt-[15px]">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr className="w-full text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                                <th className="px-6 py-3 text-left">Order</th>
                                <th className="px-6 py-3 text-left">Date</th>
                                <th className="px-6 py-3 text-left">Status</th>
                                <th className="px-6 py-3 text-left">Total</th>
                                <th className="px-6 py-3 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-light text-gray-600">
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="px-6 py-3 text-left whitespace-nowrap">1</td>
                                <td className="px-6 py-3 text-left">May 10, 2022</td>
                                <td className="px-6 py-3 text-left">Completed</td>
                                <td className="px-6 py-3 text-left">$25.00 For 1 Item</td>
                                <td className="px-6 py-3 text-left text-orange-500 cursor-pointer hover:underline">View</td>
                            </tr>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="px-6 py-3 text-left whitespace-nowrap">2</td>
                                <td className="px-6 py-3 text-left">May 10, 2022</td>
                                <td className="px-6 py-3 text-left">Processing</td>
                                <td className="px-6 py-3 text-left">$17.00 For 1 Item</td>
                                <td className="px-6 py-3 text-left text-orange-500 cursor-pointer hover:underline">View</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </DashboardLayout>

        </div>
    );
};

export default OrderPage;
