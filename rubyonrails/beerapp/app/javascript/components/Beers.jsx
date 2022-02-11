import React, {useEffect, useState} from 'react';
import {message, Table, Popconfirm} from 'antd';
import AddBeerModal from "./AddBeerModal";

export default () => {
    const [beers, setBeers] = useState([]);
    const columns = [
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
        },
        {
            title: "Style",
            dataIndex: "style",
            key: "style",
        },
        {
            title: "Country",
            dataIndex: "country",
            key: "country",
        },
        {
            title: "Quantity",
            dataIndex: "quantity",
            key: "quantity",
        },
        {
            title: "",
            key: "action",
            render: (_text, record) => (
                <Popconfirm title="Are you sure to delete this beer?" onConfirm={() => deleteBeer(record.id)} okText="Yes" cancelText="No">
                    <a href="#" type="danger">
                        Delete{" "}
                    </a>
                </Popconfirm>
            ),
        },
    ];

    const loadBeers = () => fetch("api/v1/beers/index")
        .then(data => {
            if (data.ok) {
                return data.json()
            }
            throw new Error("Network error.")
        })
        .then(data => data.forEach(beer =>
            setBeers(prev => [...prev, {
                key: beer.id,
                ...beer
            }])))
        .catch(error => message.error("Error: " + error));

    const reloadBeers = async () => {
        setBeers([]);
        await loadBeers();
    };

    const deleteBeer = id => fetch(`api/v1/beers/${id}`, { method: "delete" })
        .then(async data => {
            if (data.ok) {
                await reloadBeers();
                return data.json();
            }
            throw new Error("Network error.");
        })
        .catch(error => message.error("Error: " + error));

    useEffect(async () => {
        await loadBeers();
    }, []);

    return (
        <>
            <Table className="table-striped-rows" dataSource={beers} columns={columns} pagination={{pageSize: 5}}/>

            <AddBeerModal reloadBeers={reloadBeers} />
        </>
    )
};