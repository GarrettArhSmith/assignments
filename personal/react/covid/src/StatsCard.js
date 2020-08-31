import React, { Component } from 'react';
import { Card, Statistic, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const spinner = <LoadingOutlined style={{ fontSize: 24 }} spin />;


const numFormat = num => num !== undefined && num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

class StatsCard extends Component {
    render() {
        const content = (loading) => {
            if (loading) return <Spin indicator={spinner} />
            else {
                return (
                    <>
                        <Statistic  
                            title="Cases" 
                            value={numFormat(this.props.data?.TotalConfirmed)} 
                            valueStyle={{color: "#d4380d"}} 
                        />
                        <Statistic 
                            title="Deaths" 
                            value={numFormat(this.props.data?.TotalDeaths)} 
                            valueStyle={{color: "#d4380d"}} 
                        />
                        <Statistic 
                            title="Recovered" 
                            value={numFormat(this.props.data?.TotalRecovered)} 
                            valueStyle={{color: "#348803", gridColumn: 1 / 3}} 
                        />
                    </>
                )
            }
        }
        return (
            <Card style={{ width: 350 }} title={this.props.title} className="card">
                {content(this.props.loading)}
                {this.props.children}
            </Card>
        );
    }
}

export default StatsCard;