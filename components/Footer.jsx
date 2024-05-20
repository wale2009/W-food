'use client';
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
    return (
        <motion.footer
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
            className="bg-footer bg-cover bg-no-repeat text-white pt-16
            " id='contact'>
            <div
                className="container ma-auto">
                <div className="flex flex-col justify-between xl:flex-row">
                    {/* logo */}
                    <div className="w-[300px] mb-8 xl:mb-0">
                        <Link href="/">
                            <Image src='/logo.svg' width={90} height={36} alt="" />
                        </Link>
                    </div>
                    {/* grid items */}
                    <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px]
                mb-8 xl:mb-16">
                        {/* blog */}
                        <div>
                            <h4 className="font-semibold mb-5">Blog</h4>
                            <ul className="flex flex-col gap-y-6 text-sm">
                                <li>
                                    <Link href='/'>
                                        Embark on a Taste Odyssey: Where Flavors Know No Borders.
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        Discover Boundless Flavors: A Journey Without Borders.
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        Savor Global Cuisine: Where Borders Blur in Flavorful Escapes.
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        Taste the World: Where Culinary Adventures Know No Limits.
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* item */}
                        <div>
                            <h4 className="font-semibold mb-5"> New Item</h4>
                            <ul className="flex flex-col gap-y-6 text-sm">
                                <li>
                                    <Link href='/'>
                                        Embark on a flavorful voyage at W'Food for a Good, where taste knows no borders.
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        Immerse yourself in a tapestry of international flavors, each dish a masterpiece of culinary artistry.
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        Your dining experience is our passion; let us enchant your palate.
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        Stay connected for exclusive updates and culinary adventures.
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        {/* socials */}
                        <div>
                            <h4 className="font-semibold mb-5"> Socials</h4>
                            <div className="grid grid-cols-3 gap-6 text-lg cursor-pointer">
                                <FaInstagram />
                                <FaSquareXTwitter />
                                <FaLinkedin />
                                <FaYoutube />
                                <FaFacebook />
                                <FaTiktok />
                            </div>
                        </div>
                    </div>
                </div>
                {/* copyright */}
                <div className="py-4 border-t border-white/10">
                    <p
                        className="text-white/60 text-center text-sm">
                        Copyright @copy; W'Food 2023
                    </p>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer