import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'
import List_user from './data/List_user.json';
const options = { closeBoxURL: '', enableEventPropagation: true };



const positions = [{
    lat: 21.027763, lng: 105.834160, label: "position 1"
}, {
    lat: 21.027763, lng: 106, label: "position 2"
}, {
    lat: 21.127763, lng: 106.1, label: "position 3"
}]

const Map = () => {
    return (
        <div>
            <GoogleMap
                defaultZoom={14}
                defaultCenter={{ lat: 15.975539472580051, lng: 108.25319925509423 }}
            >
                {
                    List_user.map((user, index) =>
                        <Marker
                            position={new window.google.maps.LatLng(user)}
                        >

                            <InfoBox
                                options={options}
                            >
                                <>
                                    <div style={{ backgroundColor: 'green', color: 'white', borderRadius: '1em', padding: '0.2em' }}>
                                        Tên: {user.name}<br />
                                        Biển số: {user.BienSo}
                                    </div>
                                </>
                            </InfoBox>

                        </Marker>
                    )
                }

            </GoogleMap>
        </div>
    );
}

export default withScriptjs(withGoogleMap(Map));