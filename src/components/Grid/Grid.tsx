import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

import './grid.css';

type props = {
    data: Course[]
}

const Grid = ({ data }: props) => {
    return (
        <div className="grid__container">
            {data.length > 0 ?
                data.map((item: Course) => <Card key={item.id} course={item} />)
                :
                <div> There are no courses</div>
            }
        </div>
    )
}

export default Grid;