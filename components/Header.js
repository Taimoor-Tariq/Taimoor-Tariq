import { MailIcon, DocumentDownloadIcon } from '@heroicons/react/solid';

const profile = {
    name: 'Taimoor Tariq',
    email: 'taimoorhero15@gmail.com',
    avatar: '/images/avatar.jpg',
    banner: '/images/banner.jpg',
}

export default function Layout() {
    return (
        <>
            <div>
                <img className='h-32 w-full object-cover lg:h-60' src={profile.banner} alt='' />
            </div>
            <div className='max-w-5xl mx-auto mb-16 px-4 sm:px-6 lg:px-8'>
                <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
                    <div className='flex'>
                        <img className='h-24 w-24 rounded-full ring-4 ring-gray-200 sm:h-32 sm:w-32' src={profile.avatar} alt='' />
                    </div>
                    <div className='mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
                        <div className='sm:hidden md:block mt-6 min-w-0 flex-1'>
                            <h1 className='text-2xl font-bold text-gray-200 truncate'>{profile.name}</h1>
                        </div>
                        <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
                            <a
                                type='button'
                                className='inline-flex justify-center px-4 py-2 border border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-200 bg-gray-700 hover:bg-gray-600'
                                href='/Taimoor_Tariq_-_Resume.pdf'
                                download
                            >
                                <DocumentDownloadIcon className='-ml-1 mr-2 h-5 w-5 text-gray-400' aria-hidden='true' />
                                <span>Download Resume</span>
                            </a>
                            <a
                                type='button'
                                className='inline-flex justify-center px-4 py-2 border border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-200 bg-gray-700 hover:bg-gray-600'
                                href='mailto:taimoorhero15@gmail.com'
                                target='_blank'
                            >
                                <MailIcon className='-ml-1 mr-2 h-5 w-5 text-gray-400' aria-hidden='true' />
                                <span>Message</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='hidden sm:block md:hidden mt-6 min-w-0 flex-1'>
                    <h1 className='text-2xl font-bold text-gray-900'>{profile.name}</h1>
                </div>
            </div>
        </>
    )
}