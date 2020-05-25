import React from 'react';
import { Menu, Image, Container, Grid, Header, Dropdown, Form, Button } from 'semantic-ui-react';
import {
    JamesCard,
    JamesWrapper,
    JamesButton,
    JamesButtonGroup
} from 'themes/JamesStyles';
import {
    MenuItemText,
    JamesHeader,
    JamesNormalText
} from 'themes/JamesText';
import {
    JamesInput,
    JamesForm,
    JamesDropdown,
    JamesDatePicker
} from 'themes/JamesForm';
import JamesListTable from 'themes/JamesListTable';
import moreIcon from 'assets/images/btn_more.png';


//TODO api call
const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

const data = [
    { id: 1, name: "재직증명서 발급 서비스 인스턴스 #1", endpoint: "http://10.10.101.1:8080", status: true, serviceId: 1, siteName: "현대카드" },
    { id: 1, name: "재직증명서 발급 서비스 인스턴스 #1", endpoint: "http://10.10.101.1:8080", status: true, serviceId: 1, siteName: "현대카드" },
    { id: 1, name: "재직증명서 발급 서비스 인스턴스 #1", endpoint: "http://10.10.101.1:8080", status: true, serviceId: 1, siteName: "현대카드" },
    { id: 1, name: "재직증명서 발급 서비스 인스턴스 #1", endpoint: "http://10.10.101.1:8080", status: true, serviceId: 1, siteName: "현대카드" }
]

function onFetchData() {

}


const PaymentCancellation = (props) => {
    const columns = [
        {
            Header: 'Id',
            accessor: 'id',
            show: false
        },
        {
            Header: 'Instance name',
            accessor: 'name'
        },
        {
            Header: 'Site name',
            accessor: 'siteName',
        },
        {
            Header: 'Service name',
            accessor: 'serviceName'
        },
        {
            Header: 'Endpoint',
            accessor: 'endpoint'
        },
        {
            Header: 'Status',
            accessor: 'status'
        },
    ]

    return (
        <Container style={{ width: '75%' }}>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <JamesHeader size={1}>결제취소</JamesHeader>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={4}>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesNormalText size='15px'>결제취소 접수건</JamesNormalText>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px'>
                                            {/* TODO api call */}
                                            5
                                        </JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesNormalText size='15px'>결제취소접수 금액</JamesNormalText>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px'>
                                            {/* TODO api call */}
                                            230,000
                                        </JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesNormalText size='15px'>잔여금액</JamesNormalText>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px'>
                                            {/* TODO api call */}
                                            500,000
                                        </JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesNormalText size='15px'>층전필요금액</JamesNormalText>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <JamesHeader size='36px'>
                                            {/* TODO api call */}
                                            0
                                        </JamesHeader>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <JamesCard>
                            <JamesListTable
                                link={0}
                                columns={columns}
                                data={data}
                                count={10}
                                // onClick={(cellValue) => this.handleInstanceNameClick(cellValue)}
                                onFetchData={onFetchData}
                            // pageCount={pageCount}
                            // search={searchCondition}
                            // totalCount={totalCount}
                            />
                        </JamesCard>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row></Grid.Row>
            </Grid>
        </Container>
    );

}

export default PaymentCancellation;