import { useState, useEffect } from "react";

export default function Order() {
    const [orders, setorders] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/order")
            .then((response) => response.json())
            .then((datas) => setorders(datas));
    },[]);

    if (!orders) {
        return <></>;
    }


       const getStatusClass = (status) => {
        switch (status) {
            case "Delivered":
                return "bg-green-100 text-green-800";
            case "Pending":
                return "bg-yellow-100 text-yellow-800";
            case "Processing":
                return "bg-blue-100 text-blue-800";
            case "Shipped":
                return "bg-purple-100 text-purple-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <>
            <div className="overflow-x-auto p-4">
                <table className="min-w-full border border-gray-300 text-sm sm:text-base">
                    <thead className="bg-gray-100">
                        <tr>
                        <th className="px-4 py-2 border">ORDER ID</th>
                            <th className="px-4 py-2 border">Product Name</th>
                        <th className="px-4 py-2 border">Quantity</th>
                    <th className="px-4 py-2 border">Total Amount</th>
                            <th className="px-4 py-2 border">Order Date</th>
                            <th className="px-4 py-2 border">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border">{order.order_id}</td>
                         <td className="px-4 py-2 border">{order.product_name}</td>
                                <td className="px-4 py-2 border">{order.quantity}</td>
                             <td className="px-4 py-2 border">{order.total_price}</td>
                                <td className="px-4 py-2 border">{order.order_date}</td>
                                 <td className="px-4 py-3 border">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(order.status)}`}>
                                    {order.status}
                                        </span>
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
