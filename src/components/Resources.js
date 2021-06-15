import React from 'react'

export default function Resources() {
    return (
        <div className='resources'>
            <nav className='sideNav come-in' >
                <a href='#usecases'>Use cases</a><br /><br /><br />
                <a href='#own-publications'>Own publications</a><br /><br />
                <a href='#papercuts'>Paper cuts</a><br /><br />
                <a href='#news'>News</a>
            </nav>
            <div id='usecases' className='resourceBox'>
                <h3>Use cases</h3>
                <div >
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                </div>
            </div>
            <div id='own-publications' className='resourceBox'>
                <h3>Own publications</h3>
                <div>
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                </div>
            </div>
            <div id='papercuts' data-aos="fade-right" className='resourceBox'>
                <h3>Paper cuts</h3>
                <div>
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                </div>
            </div>
            <div id='news' data-aos="fade-right" className='resourceBox'>
                <h3>News</h3>
                <div >
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                    <img src='' alt='img' />
                </div>
            </div>
        </div>
    )
}
