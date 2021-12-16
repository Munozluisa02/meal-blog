import React from 'react';

import Link from 'next/link';

const categories = [{name: 'Chiken', slug: 'Chiken'}, {name: 'Pork', slug: 'Pork'}]

const Header = () => {
    return (
        <div className='container ms-auto px-10 mb-8'>
            <div className='border-b w-full inline-block boreder-blue-400 py-8'>
                <div className='md:float-left block'>
                    <Link href="/">
                        <span className='cursor-pointer font-bold text-4x1 text-white'>
                            GraphCMS
                        </span>
                    </Link>
                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='md:float-right mt-2 aling-middle text-white ml-4 font-semibold cursor-pointer'>
                                {category.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
