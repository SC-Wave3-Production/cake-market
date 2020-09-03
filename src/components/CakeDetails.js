import React from 'react';
import { useParams } from 'react-router-dom'

export default function CakeDetails(props) {
    const { itemId } = useParams();
    return (
        <div>Cake id {itemId} here.</div>
    )
}