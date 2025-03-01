import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from './HeroBanner';

const Home = () => {
  return (
    <div className="home-container">
      <HeroBanner /> {/* Add HeroBanner here */}
      {/* Box Links Section */}
      <div className="box-links">
        <Link to="/spa" className="box-link spa-box">
          <div className="box-overlay">
            <h2>Spa</h2>
          </div>
        </Link>
        <Link to="/swimspas" className="box-link swim-box">
          <div className="box-overlay">
            <h2>Swim Spa</h2>
          </div>
        </Link>
        <Link to="/gazebo" className="box-link gazebo-box">
          <div className="box-overlay">
            <h2>Gazebo</h2>
          </div>
        </Link>
      </div>

      {/* Our Story Section */}
      <section id="our-story" className="our-story">
        <h2>Our Story</h2>
        <p>
      I first started in the pool and spa business in 1987 cleaning pools as a high school kid trying to earn some extra money.  After working summers with the same business through college and starting a career and family after college, I decided to go full time into the pool & spa industry.  After several years of figuring out how to purchase the business, we somehow did it and we were blessed with owing & operating one of the largest pool & spa retail businesses in the State of Washington (which is still going great today).  It was a lot of hard work the past 30 years, but my family and I were blessed beyond anything we could have imagined with the great help of so many great employees (and of course all my kids growing up in the business as well) and friendships over the years.  After my four children finished college in Arizona, they all fell in love with Arizona and decided to continue living here and as fate would have it, we were able to sell the business in Washington and move full-time to state of Arizona to be with the people that mean the most to us.  My 35+ years in the pool & spa business allowed me to develop some very close relationships along the way with lifetime friends and employees, retailers, distributors, & manufacturers and I wanted to build a new business with my kids that allowed me some freedoms, help them grow in their careers, and also be with the ones I love the most.  So, we started D’s Outdoor Living in Arizona:  a company with a fresh idea and a way to give our customers the best products at the very best prices and not sacrifice the service our customers will need after the product is delivered.
        </p>
        <p>
      D’s Outdoor Living is a new approach to retailing in the spa industry, as we have removed the overhead of the business that every company experiences (thus, the need to drive the price up).  We have partnered with the best manufacturers, worked with them to design the hot tubs & swim spas we know our customers desire and have built spas and swim spas that withstand the Arizona landscape & heat. We have come to market with proven products, the most knowledge in the industry, and a way to service our customers the best!  Without having the overhead of high retail rent & utilities, the 35+ years of negotiating the best price on the wholesale side of the process, and being the parts distributor of these brands for the entire United States, our customers not only get the best pricing, they also receive the best service for years to come (we ARE the service center for the entire United States for Bellagio Spas) without sacrificing any quality for our customers.
        </p>
        <p>
      Added to that, you are always dealing with family and never dealing with anyone else.  We are normal people who want you to have our cell numbers so if you ever need anything, we are just a simple phone call away.  We truly want to build long term friendships with our customers and get business the old-fashioned way:  by taking care of customers and getting new business by referrals.  We encourage you to call, e-mail, or better yet come and see our way of doing business:  no high pressure “commissioned salespeople”, as we feel our process & products sells itself.  Our motto is simple:  “Drive a little, Save a Lot”.  We personally guarantee that buying your products through D’s Outdoor Living will be the best decision you make when buying your outdoor products and are trying to preserve the old way of doing business!
        </p>
      <p>
      We look forward to meeting you soon!
      </p>

      <p>   
      Sincerely In Service,
      </p>
      <p>
      Chris, CJ, & Levi
      </p>
      </section>

      {/* Contact Us Section */}
        <section id="contact-us" className="contact-us">
            <h2>Contact Us</h2>
            <p><strong>Phone:</strong> (480) 997-9781</p>
            <p>
                <strong>Emails:</strong><br />
                Sales: CJ@ds-outdoorliving.com<br />
                Service: service@ds-outdoorliving.com
            </p>
            <p>
                <strong>Location 1 (North Phoenix):</strong> <br />
                3106 W Blue Eagle Lane Phoenix AZ 85086<br />
                <strong>Phone:</strong> (480) 997-9781<br />
            </p>
                <strong>Location 2 (Chandler - Coming Soon):</strong> <br />
                6140 W Chandler Blvd Suite 5,6,7 Chandler AZ 85226<br />
                <strong>Phone:</strong> (480) 997-9447<br />
        </section>

    </div>
  );
};

export default Home;

