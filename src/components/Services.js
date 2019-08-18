import React, { Component } from 'react'
import Title from './Title'
import {faCockTail, FaHiking, FaShuttleVan, FaBeer} from "react-icons"
import { FaCocktail } from 'react-icons/fa';
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "free cocktails",
                info: "'Lorem ipsum'"
            },
            {
                icon:<FaHiking/>,
                title: "free Hiking",
                info: "'Lorem ipsum'"
            },
            {
                icon:<FaShuttleVan/>,
                title: "free ShuttleVan",
                info: "'Lorem ipsum'"
            },
            {
                icon:<FaBeer/>,
                title: "free Beer",
                info: "'Lorem ipsum'"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item), index=> {
                        return <article key="{index}" className="service"></article>
                        <span> {item.icon}</span>
                        <h6> {item.title}</h6>
                        <p>{item.info}</p>
                    })}
                </div>
            </section>
        )
    }
}
