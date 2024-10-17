import React from 'react'

const DoctorAppointments = ({ appointments }) => {
  return (
    <table className= "w-full text-left text-sm text-gray-500">
        <thead className= "text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Gender
                </th>
                <th scope="col" className="px-6 py-3">
                    Booked On
                </th>
            </tr>
    </thead>

    <tbody>
        {appointments?.map(item => (
            <tr key={item._id}>
                <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitesoace-nowrap">
                    <div className="pl-3">
                        <div className="text-base font-semibold">{items.user.name}</div>
                        <div className="text-normal text-gray-500">{items.user.email}</div>
                    </div>
                </th>

                <td className="px-6 py-4">{item.user.gender}</td>
                <td className="px-6 py-4">{formateDate(item.createdAt)}</td>
            </tr>     
        ))}
    </tbody>

    </table>
  )
}

export default DoctorAppointments
