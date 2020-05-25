import React from 'react';
import { Menu, Image, Container, Grid, Header, Dropdown, Form, Button, Divider } from 'semantic-ui-react';
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


const ShopInfo = (props) => {
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
                        <JamesHeader size={1}>상점정보</JamesHeader>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1}>
                    <Grid.Column>
                        <JamesCard>
                            <Grid>
                                <Grid.Row columns={2}>
                                    <Grid.Column width={8}>
                                        모션(MOCEAN)
                                    </Grid.Column>
                                    <Grid.Column width={8} textAlign='right'>
                                        icon
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Divider />
                                    </Grid.Column>
                                    
                                </Grid.Row>
                                <Grid.Row></Grid.Row>
                                <Grid.Row></Grid.Row>
                                <Grid.Row></Grid.Row>
                                <Grid.Row></Grid.Row>
                                <Grid.Row></Grid.Row>
                                <Grid.Row></Grid.Row>
                                <Grid.Row></Grid.Row>
                                <Grid.Row></Grid.Row>
                                <Grid.Row></Grid.Row>
                            </Grid>
                        </JamesCard>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );

}

export default ShopInfo;