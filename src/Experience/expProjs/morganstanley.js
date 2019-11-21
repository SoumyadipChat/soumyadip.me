import React from 'react';
import './ms.css'
import grid from '../../Assets/grid.svg'
import dashboard from '../../Assets/dashboard.svg'

function MS(){
    return (
        <div className="MSProjs">
            <div className="projTile">
            <div className="projHeader">
                <div className="headerText">
                    <c className="HeaderMain"> UOH </c> -Ag-grid based summary to filter and view large chunks of Historic Data stored in Data Warehouses.
                </div>
                <img className="hdrIcon" src={grid} alt="grid"/>
            </div>
            <div className="projDesc">
               <c className="boldFont">Built with Angular, Ag-Grid, Java Spring-boot, Mybatis, MySQL. </c>  Key Points:
                <p className="projPoints">1. Componentization for better reuability.</p>
                <p className="projPoints">2. Observer-Subscription based state store.</p>
                <p className="projPoints">3. Java Streams and Colections for processing.</p>
                <p className="projPoints">4. Apache Camel Integration platform.</p>
            </div>
        </div>
        <div className="projTile">
            <div className="projHeader">
                <div className="headerText">
                    <c className="HeaderMain"> K-Watch </c> -Material based Dashboard to moniter Kafka Clusters. Display, filter and replay messages in Kafka pipelines.
                </div>
                <img className="hdrIcon" src={dashboard} alt="grid"/>
                
            </div>
            <div className="projDesc">
            <c className="boldFont">Built with Angular, Ag-Grid, Highcharts, Java Spring-boot. </c>  Key Points:
                <p className="projPoints">1. Angular Material components.</p>
                <p className="projPoints">2. Real-time monitoring with dynamic charts.</p>
                <p className="projPoints">3. Replay message without resetting offset.</p>
            </div>
        </div>
        </div>
    )
}

export default MS;