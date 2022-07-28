import React, { useEffect } from 'react';
import Header from './component/Header';
import { useSelector, useDispatch } from 'react-redux';
import { updateData, selectData } from './redux/AppdataSlice'
import { fetchAppData } from './api-store/api-store';
import './style/app.css';
import MerchandiseInfo from './component/MerchandiseInfo.js';
import LoadingSpinner from './component/LoadingSpinner';
import SalesTable from './component/SalesTable';

function App() {
    const data = useSelector(selectData)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("here")
        const fetch = async () => {
            try {
                let data = await fetchAppData()
                dispatch(updateData(data))
            } catch (error) {
                console.log(error.message)
            }
        }

        fetch()

    }, [dispatch])
    return (
        <div className='app'>
            <Header />

            <section className='content'>
                {data.length === 0 ? 
                    <LoadingSpinner />  :
                    <div className='content-outer-container'>
                        <MerchandiseInfo data={data} />
                        <SalesTable data={data} />
                    </div>
                }
            </section>

            

        </div>
    );
}

export default App;
