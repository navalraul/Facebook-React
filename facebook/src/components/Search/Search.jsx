
import React from 'react';
import './Search.css'

const Search = () => {
    return (
        <div id='Semain'>
            <div className='Sright'>
                <div className='Sright-top'>
                    <h3>Search Results</h3>
                </div>
                <div className='Sright-bot'>
                    <h4>Filters</h4>
                    <div className='Circle-main'>
                        <div className='Circle-icon'>
                            <i class="fa-solid fa-bars"></i>
                        </div>
                        <div className='Circle-text'>
                            <p>All</p>
                        </div>
                    </div>
                    <div className='Circle-main'>
                        <div className='Circle-icon'>
                            <i class="fa-brands fa-usps"></i>
                        </div>
                        <div className='Circle-text'>
                            <p>Posts</p>
                        </div>
                    </div>
                    <div className='Circle-main'>
                        <div className='Circle-icon'>
                            <i class="fa-solid fa-users"></i>
                        </div>
                        <div className='Circle-text'>
                            <p>People</p>
                        </div>
                    </div>
                    <div className='Circle-main'>
                        <div className='Circle-icon'>
                            <i class="fa-regular fa-image"></i>
                        </div>
                        <div className='Circle-text'>
                            <p>Photos</p>
                        </div>
                    </div>
                    <div className='Circle-main'>
                        <div className='Circle-icon'>
                            <i class="fa-solid fa-video"></i>
                        </div>
                        <div className='Circle-text'>
                            <p>Videos</p>
                        </div>
                    </div>
                    <div className='Circle-main'>
                        <div className='Circle-icon'>
                            <i class="fa-solid fa-shop"></i>
                        </div>
                        <div className='Circle-text'>
                            <p>Marketplace</p>
                        </div>
                    </div>
                    <div className='Circle-main'>
                        <div className='Circle-icon'>
                            <i class="fa-solid fa-file-lines"></i>
                        </div>
                        <div className='Circle-text'>
                            <p>Pages</p>
                        </div>
                    </div>
                    <div className='Circle-main'>
                        <div className='Circle-icon'>
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className='Circle-text'>
                            <p>Places</p>
                        </div>
                    </div>
                    <div className='Circle-main'>
                        <div className='Circle-icon'>
                            <i class="fa-solid fa-people-group"></i>
                        </div>
                        <div className='Circle-text'>
                            <p>Groups</p>
                        </div>
                    </div>
                    <div className='Circle-main'>
                        <div className='Circle-icon'>
                            <i class="fa-solid fa-champagne-glasses"></i>
                        </div>
                        <div className='Circle-text'>
                            <p>Events</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Sleft'>
                <div className='Sleft-main'>
                    <h3>People</h3>
                    <div className='Friend'>
                        <div className='Fr-img'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" />
                        </div>
                        <div className='Fr-text'>
                            <h4>Deepak</h4>
                            <p>Mutual Friends</p>
                        </div>
                        <div className='Fr-but'>
                            <button>Add Friend</button>
                        </div>
                    </div>
                    <div className='Friend'>
                        <div className='Fr-img'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" />
                        </div>
                        <div className='Fr-text'>
                            <h4>Sainath</h4>
                            <p>Mutual Friends</p>
                        </div>
                        <div className='Fr-but'>
                            <button>Add Friend</button>
                        </div>
                    </div>
                    <div className='Friend'>
                        <div className='Fr-img'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" />
                        </div>
                        <div className='Fr-text'>
                            <h4>Vicky</h4>
                            <p>Mutual Friends</p>
                        </div>
                        <div className='Fr-but'>
                            <button>Add Friend</button>
                        </div>
                    </div>
                    <div className='Friend'>
                        <div className='Fr-img'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" />
                        </div>
                        <div className='Fr-text'>
                            <h4>Sunny</h4>
                            <p>Mutual Friends</p>
                        </div>
                        <div className='Fr-but'>
                            <button>Add Friend</button>
                        </div>
                    </div>
                    <div className='Friend'>
                        <div className='Fr-img'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" />
                        </div>
                        <div className='Fr-text'>
                            <h4>Kunal</h4>
                            <p>Mutual Friends</p>
                        </div>
                        <div className='Fr-but'>
                            <button>Add Friend</button>
                        </div>
                    </div>
                    <div className='Friend'>
                        <div className='Fr-img'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" />
                        </div>
                        <div className='Fr-text'>
                            <h4>Vrushab</h4>
                            <p>Mutual Friends</p>
                        </div>
                        <div className='Fr-but'>
                            <button>Add Friend</button>
                        </div>
                    </div>
                    <div className='Friend'>
                        <div className='Fr-img'>
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" />
                        </div>
                        <div className='Fr-text'>
                            <h4>Nandu</h4>
                            <p>Mutual Friends</p>
                        </div>
                        <div className='Fr-but'>
                            <button>Add Friend</button>
                        </div>
                    </div>
                    <button>See All</button>
                </div>
            </div>
        </div>
    )
}

export default Search
