import React from 'react'
import { fetchAuthenticatedUser, fetchCommission } from '@/app/actions/user/data';
import ValidateJourney from '@/components/journey/ValidateJourney';
import SecurityCheck from '@/components/checkSecurityCode/CheckSecurityCode';
import { auth } from '@/app/auth';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import Image from 'next/image';
import balance_card from "@/public/costar_assets/images/balance-card.svg"
import card_vect from "@/public/costar_assets/images/card_vect.png"
import Image1 from "@/public/costar_assets/slider2_images/img1.png";
import Image2 from "@/public/costar_assets/slider2_images/img2.jpg";
import Image3 from "@/public/costar_assets/slider2_images/img3.jpg";

export const dynamic = "force-dynamic";

const page = async () => {

  const { user: logedinUser } = await auth();

  const user = await fetchAuthenticatedUser() || {};
  const { allCommission, userCommission } = await fetchCommission();

  return (
    <>
      <div className='background-color'>
        <section className="journey-section">
          <Breadcrumb
            link="/dashboard"
            title="Journey"
            authUser={JSON.parse(JSON.stringify(user))}
            authenticatedUser={JSON.parse(JSON.stringify(user))}
            allCommission={JSON.parse(JSON.stringify(allCommission))}
            userCommission={JSON.parse(JSON.stringify(userCommission))}
          />
          <div className="journey-info-wrapper">
            <div className='user-balance-wrapper'>
              <div className='balance-card-img'>
                <Image
                  src={balance_card}
                  alt='card'
                  height={100}
                  width={100}
                />
                <div className='money-card-vector'>
                  <Image
                    src={card_vect}
                    alt='vector'
                    height={100}
                    width={100}
                    unoptimized
                  />
                </div>
                <div className='user-balance-parent'>
                  <div className='user-balance-child'>
                    <h3>$ {user?.balance?.toFixed(2) ?? ""}</h3>
                  </div>
                  <div className='user-balance-child'>
                    <p>Total Balance</p>
                  </div>
                </div>
                <div className="journey-start-details-wrapper">
                  <div className="journey-start-details-parent">
                    <div className="journey-start-details-childs">
                      <h4>{user?.daily_available_order ?? ""}</h4>
                      <p>Total Journey</p>
                    </div>
                    <div className="journey-start-details-childs">
                      <h4>{user?.today_order ?? ""}</h4>
                      <p>Visited Journey</p>
                    </div>
                    <div className="journey-start-details-childs">
                      <h4>$ {user?.today_commission?.toFixed(2) ?? ""}</h4>
                      <p>Current Rebates</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="journey-submit-btn">
                <ValidateJourney />
              </div>
            </div>
          </div>
        </section>
        <div className='hotel-lists-wrapper'>
          <div className='hotel-lits-title'>
            <h2>Explore traval Packages</h2>
          </div>
          <div className='hotel-info-details'>
            <div className='hotel-info-child'>
              <Image
                src={Image1}
                alt="white"
                height={100}
                width={100}
                unoptimized
              />
            </div>
            <div className='hotel-info-child'>
              <h3>SHANGRI-LA</h3>
              <p>London, GB</p>
            </div>
            <div className='hotel-info-child'>
              <ul>
                <li>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star-half-alt'></i>
                </li>
              </ul>
              <p>1,293 Sales</p>
            </div>
          </div>
          <div className='hotel-info-details'>
            <div className='hotel-info-child'>
              <Image
                src={Image2}
                alt="white"
                height={100}
                width={100}
                unoptimized
              />
            </div>
            <div className='hotel-info-child'>
              <h3>HILTON</h3>
              <p>Istanbul, TR</p>
            </div>
            <div className='hotel-info-child'>
              <ul>
                <li>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </li>
              </ul>
              <p>3,092 Sales</p>
            </div>
          </div>
          <div className='hotel-info-details'>
            <div className='hotel-info-child'>
              <Image
                src={Image3}
                alt="white"
                height={100}
                width={100}
                unoptimized
              />
            </div>
            <div className='hotel-info-child'>
              <h3>AMSTERDAM </h3>
              <p>Amsterdam, NL</p>
            </div>
            <div className='hotel-info-child'>
              <ul>
                <li>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star-half-alt'></i>
                  <i className='fa fa-star emptyStar'></i>
                </li>
              </ul>
              <p>773 Sales</p>
            </div>
          </div>
        </div>
      </div>
      <SecurityCheck
        user={JSON.parse(JSON.stringify(logedinUser))}
        authenticatedUser={JSON.parse(JSON.stringify(user))}
      />
    </>
  )
}

export default page;