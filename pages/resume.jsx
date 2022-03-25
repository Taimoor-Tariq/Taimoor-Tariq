import { useRef } from "react";
import Pdf from "react-to-pdf";

import profile from "../public/profile";

const Page = () => {
    const ref = useRef();

    return (
        <body className="bg-gray-500 flex justify-center pt-12 pb-6">
            <div className="h-full w-5/12 bg-gray-200 text-gray-900 shadow-2xl">
                <Pdf targetRef={ref} filename="Taimoor_Tariq_-_Resume.pdf">
                    {({ toPdf }) => {
                        return (
                            <div className="fixed top-0 left-0 bg-gray-900 w-full p-4 flex justify-between">
                                <p className="text-gray-200 font-semibold text-2xl ml-6">Taimoor Tariq - Resume.pdf</p>
                                <a href="/" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Back to my site</a>
                                <button onClick={toPdf} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Download
                                </button>
                            </div>
                        );
                    }}
                </Pdf>
                <div ref={ref} className="p-14 py-10 pr-12">
                    <p className="font-semibold text-4xl">{profile.name}</p>
                    <p className="font-medium text-xl text-gray-500 ml-1">{profile.title}</p>
                    <div className="grid grid-cols-12 mt-8">
                        <div className="col-span-8 pr-12">
                            <p className="font-semibold text-2xl mb-1">Profile</p>
                            <p className="font-medium text-sm ml-0.5">{profile.summary}</p>

                            <p className="font-semibold text-2xl mb-1 mt-6">Employment History</p>
                            <div className="font-medium text-sm ml-0.5 flex flex-col gap-4">
                                {profile.employment.map((item, index) => {
                                    return (
                                        <div key={index} className="flex flex-col">
                                            <p className="font-bold text-base">{item.title?`${item.title} at `:''}{item.company}</p>
                                            <p className="text-gray-500 mb-1">{item.location} | {item.startDate} - {item.endDate}</p>
                                            <p className="text-gray-500 text-xs">{item.summary}</p>
                                        </div>
                                    )
                                })}
                            </div>

                            <p className="font-semibold text-2xl mb-1 mt-6">Education</p>
                            <div className="font-medium text-sm ml-0.5 flex flex-col gap-4">
                                {profile.education.map((item, index) => {
                                    return (
                                        <div key={index} className="flex flex-col">
                                            <p className="font-bold text-base">{item.degree} <span className="font-medium text-gray-500">at {item.school}</span></p>
                                            <p className="text-gray-500 mb-1">{item.location} | {item.startDate} - {item.endDate}</p>
                                            <p className="text-gray-500 text-xs">{item.summary}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="col-span-4">
                            <p className="font-semibold text-xl mb-1">Details</p>
                            <div className="grid grid-cols-12 gap-1 items-center text-gray-500 ml-1">
                                <img src="/images/icons/envelope.png" alt="" />
                                <span className="ml-2 text-sm col-span-11">{profile.email}</span>

                                <img src="/images/icons/phone.png" alt="" />
                                <span className="ml-2 text-sm col-span-11">{profile.phone}</span>

                                <img src="/images/icons/location.png" alt="" />
                                <span className="ml-2 text-sm col-span-11">{profile.address.city}, {profile.address.country}</span>

                                <img src="/images/icons/cake.png" alt="" />
                                <span className="ml-2 text-sm col-span-11">{profile.dob}</span>
                            </div>
                            <div className="grid grid-cols-12 gap-1 items-center text-gray-500 ml-1 mt-3 pt-2 border-t-2 border-gray-300">
                                <img src="/images/icons/link.png" alt="" />
                                <span className="ml-2 text-sm col-span-11">taimoor.me</span>

                                <img src="/images/icons/github.png" alt="" />
                                <span className="ml-2 text-sm col-span-11">@Taimoor-Tariq</span>

                                <img src="/images/icons/twitter.png" alt="" />
                                <span className="ml-2 text-sm col-span-11">@_TaimoorTariq</span>

                                <img src="/images/icons/linkedin.png" alt="" />
                                <span className="ml-2 text-sm col-span-11">in/MuhammadTaimoorTariq</span>
                            </div>

                            <p className="font-semibold text-xl mb-2 mt-6">Skills</p>
                            <div className="flex flex-wrap gap-2">
                                {profile.skills.map((s, index) => (
                                    <span className="bg-gray-700 text-gray-200 p-1 px-2 rounded text-sm font-semibold">{s}</span>
                                ))}
                            </div>

                            <p className="font-semibold text-xl mb-2 mt-6">Dev Skills</p>
                            <div className="flex flex-wrap gap-2">
                                {profile.devSkills.map((s, index) => (
                                    <img className="rounded" key={index} src={`https://img.shields.io/badge/${s.name}-374151?style=for-the-badge&logo=${s.badge.name}&logoColor=e5e7eb`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    );
};

Page.getInitialProps = async (ctx) => {
    return {
        title: "Taimoor Tariq",
    };
};

export default Page;
