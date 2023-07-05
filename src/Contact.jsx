import React from "react"

export default function Contact(props) { // could also destructure props like this: 'Contact({img, name, phone, email})'. NOTE! if you do it this way you must only reference e.g., {img} not {props.img}
    // console.log(props)
        /**     CONSOLE DISPLAYS: (the object 'props' and all the props it can receive (img, name, phone, email))
        * ›{image: "./images/mr-whiskerson.png", name: "Mr. Whiskerson", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}
        * ›{img: "./images/fluffykins.png", name: "Fluffykins", phone: "(212) 555-2345", email: "fluff@me.com"}
        * ›{img: "./images/felix.png", name: "Felix", phone: "(212) 555-4567", email: "thecat@hotmail.com"}
        * ›{img: "./images/pumpkin.png", name: "Pumpkin", phone: "(0800) CAT KING", email: "pumpkin@scrimba.com"}
        * There are 4 instances because we logged the '<Contact />' 4 times
        */
    return (
            <div className="contact-card">
                <img src={props.img}/>
                {/*we can access the details of the property */}
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{props.email}</p>
                </div>
            </div>
    )
}
