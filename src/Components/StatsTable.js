import React from 'react'
import { Table } from 'semantic-ui-react'

function StatsTable(props) {
    return (
        <div>
            <h2>Stats for {`${props.statsObj.location.provinceOrState}`}</h2>
            <h5>Last updated {`${props.statsObj.updatedDateTime.slice(0,10)}`}</h5>
            <Table celled>
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
                        <Table.Cell>{`${props.statsObj.stats.newlyConfirmedCases}`}</Table.Cell>
                        <Table.Cell>{`${props.statsObj.stats.totalConfirmedCases}`}</Table.Cell>
                        <Table.Cell>{`${props.statsObj.stats.newDeaths}`}</Table.Cell>
                        <Table.Cell>{`${props.statsObj.stats.newlyRecoveredCases}`}</Table.Cell>
                        <Table.Cell>{`${props.statsObj.stats.totalRecoveredCases}`}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    )
}

export default StatsTable
