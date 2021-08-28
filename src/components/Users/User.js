import React, { Component } from 'react';
import List_User from './List_user';
import Map from './Map';
import Footer from '../footer/Footer';
class User extends Component {
    render() {
        return (
            <div>
                <div className="music-box">
                    <div className="container">

                        <List_User />
                    </div>
                </div>

                <div id="screenshot" className="Lastestnews">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <div className="news-box">
                                    <Map
                                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDd9BwxcdIWgeIVBrM0rZCp8XqSG1ENRls&callback=initMap`}
                                        loadingElement={<div style={{ height: `100%` }} />}
                                        containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
                                        mapElement={<div style={{ height: `100%` }} />}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}

<script>

</script>
export default User;