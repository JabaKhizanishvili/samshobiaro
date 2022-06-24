import React from "react";
// import { Link } from "react-router-dom";
import { Link } from '@inertiajs/inertia-react'
import { usePage } from "@inertiajs/inertia-react";

export const SocialMedia = ({ color }) => {
    const { errors, gphone, gemail, gaddress, gfacebook, ginstagram, gyoutube } = usePage().props;
    return (
        <div className="socialmedia flex centered">
            <Link href={gyoutube.value} style={{ marginRight: "20px" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23.657"
                    height="16.534"
                    viewBox="0 0 23.657 16.534"
                >
                    <path
                        id="Icon_simple-youtube"
                        data-name="Icon simple-youtube"
                        d="M23.171,7.977a2.965,2.965,0,0,0-2.059-2.059c-1.844-.494-9.265-.494-9.265-.494s-7.4-.01-9.265.494A2.965,2.965,0,0,0,.522,7.977,30.813,30.813,0,0,0,.007,13.7a30.812,30.812,0,0,0,.515,5.7,2.965,2.965,0,0,0,2.059,2.059c1.842.5,9.265.5,9.265.5s7.4,0,9.265-.5A2.965,2.965,0,0,0,23.171,19.4a30.812,30.812,0,0,0,.493-5.7,30.812,30.812,0,0,0-.493-5.724ZM9.478,17.242V10.149L15.655,13.7Z"
                        transform="translate(-0.007 -5.424)"
                        fill={color}
                    />
                </svg>
            </Link>
            <Link href={ginstagram.value} style={{ marginRight: "20px" }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15.492"
                    height="15.488"
                    viewBox="0 0 15.492 15.488"
                >
                    <path
                        id="Icon_awesome-instagram"
                        data-name="Icon awesome-instagram"
                        d="M7.742,6.011a3.971,3.971,0,1,0,3.971,3.971A3.965,3.965,0,0,0,7.742,6.011Zm0,6.553a2.582,2.582,0,1,1,2.582-2.582A2.586,2.586,0,0,1,7.742,12.564ZM12.8,5.848a.926.926,0,1,1-.926-.926A.924.924,0,0,1,12.8,5.848Zm2.63.94a4.584,4.584,0,0,0-1.251-3.245,4.614,4.614,0,0,0-3.245-1.251c-1.279-.073-5.112-.073-6.39,0A4.607,4.607,0,0,0,1.3,3.54,4.6,4.6,0,0,0,.049,6.785c-.073,1.279-.073,5.112,0,6.39A4.584,4.584,0,0,0,1.3,16.421a4.62,4.62,0,0,0,3.245,1.251c1.279.073,5.112.073,6.39,0a4.584,4.584,0,0,0,3.245-1.251,4.614,4.614,0,0,0,1.251-3.245c.073-1.279.073-5.108,0-6.387ZM13.78,14.547a2.614,2.614,0,0,1-1.472,1.472,17.069,17.069,0,0,1-4.565.311,17.2,17.2,0,0,1-4.565-.311A2.614,2.614,0,0,1,1.7,14.547a17.069,17.069,0,0,1-.311-4.565A17.2,17.2,0,0,1,1.7,5.416,2.614,2.614,0,0,1,3.177,3.944a17.069,17.069,0,0,1,4.565-.311,17.2,17.2,0,0,1,4.565.311A2.614,2.614,0,0,1,13.78,5.416a17.069,17.069,0,0,1,.311,4.565A17.06,17.06,0,0,1,13.78,14.547Z"
                        transform="translate(0.005 -2.238)"
                        fill={color}
                    />
                </svg>
            </Link>
            <Link href={gfacebook.value}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.415"
                    height="17.579"
                    viewBox="0 0 9.415 17.579"
                >
                    <path
                        id="Icon_awesome-facebook-f"
                        data-name="Icon awesome-facebook-f"
                        d="M10.408,9.888,10.9,6.707H7.843V4.642A1.591,1.591,0,0,1,9.637,2.924h1.388V.215A16.924,16.924,0,0,0,8.561,0C6.047,0,4.4,1.524,4.4,4.282V6.707H1.609V9.888H4.4v7.691H7.843V9.888Z"
                        transform="translate(-1.609)"
                        fill={color}
                    />
                </svg>
            </Link>
        </div>
    );
};
