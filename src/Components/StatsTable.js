import React from 'react'
import { Table } from 'semantic-ui-react'
import '../Styles/StatsTable.css'

function StatsTable(props) {
    return (
        <div className="stats-table-wrapper">
            <div>
                {/* ternary render of title for use for US stats or State stats */}
                {props.statsObj.location.provinceOrState ? 
                <h2>Stats for {`${props.statsObj.location.provinceOrState}`}</h2> : 
                <h2>Stats for the United States</h2> }
                {/* <h2>Stats for {`${props.statsObj.location.provinceOrState}`}</h2> */}
                <h5>Last updated {`${props.statsObj.updatedDateTime.slice(0,10)}`}</h5>
            </div>
            <div className="table-wrapper">
                <Table celled color={"blue"}>
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell>Newly Confirmed Cases</Table.HeaderCell>
                        <Table.HeaderCell>Total Confirmed Cases</Table.HeaderCell>
                        <Table.HeaderCell>New Deaths</Table.HeaderCell>
                        <Table.HeaderCell>Newly Recovered Cases</Table.HeaderCell>
                        <Table.HeaderCell>Total Recovered Cases</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Table.Row>
                            <Table.Cell>{`${props.statsObj.stats.newlyConfirmedCases.toLocaleString()}`}</Table.Cell>
                            <Table.Cell>{`${props.statsObj.stats.totalConfirmedCases.toLocaleString()}`}</Table.Cell>
                            <Table.Cell>{`${props.statsObj.stats.newDeaths.toLocaleString()}`}</Table.Cell>
                            <Table.Cell>{`${props.statsObj.stats.newlyRecoveredCases.toLocaleString()}`}</Table.Cell>
                            <Table.Cell>{`${props.statsObj.stats.totalRecoveredCases.toLocaleString()}`}</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export default StatsTable
