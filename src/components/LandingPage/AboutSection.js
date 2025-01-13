import React, { useState } from "react";
import "./AboutSection.css";

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleDetails = () => {
    setExpanded(!expanded);
  };

  return (
    <div id="about-us" className="about-container">
      <h2>About Cypher Neo Games</h2>
      <div className="about-parallel">
        {/* Our Company Section */}
        <div className="about-section">
          <h3>Our Company</h3>
          <p>
            Cypher Neo Games is India's Leading Online Gaming Portal completely
            owned and operated by Head Digital Works Private Limited. With a
            mission to promote online gaming in India, Cypher Neo Games is
            steadily providing a platform for a community of skilled gamers all
            over the country.
          </p>
          <p>
            With 15+ years of pioneering experience in this space, we at Cypher
            Neo Games understand the needs of online gaming in India and strive
            to provide better and faster results as well as a significantly
            improved gameplay experience.
          </p>
        </div>

        {/* Our Team Section */}
        <div className="about-section">
          <h3>Our Team</h3>
          <p>
            At the heart of our operations is a team of remarkable individuals
            who help steady the ship in the right direction. Our team is a
            diverse mix of young entrepreneurs as well as an able and
            experienced team of industry stalwarts who are masters of their
            domains.
          </p>
          <p>
            With state-of-the-art software created on a custom-built
            architecture to be robust in operating Multi-Player Tables and
            Online Tournaments, we have a dream combo in place.
          </p>
        </div>
      </div>

      {/* Read More Section */}
      {expanded && (
        <div className="additional-content">
          <h3>Who We Are</h3>
          <p>
            At Cypher Neo Games, we are a leading destination for online gaming
            in India. We are exclusively managed and owned by Head Digital Works
            Private Limited. As part of its efforts to improve the online gaming
            experience in India, Cypher Neo Games has built a platform that will
            bring together a large community of skilled gamers from all over the
            country.
          </p>
          <p>
            Our team of experts uses advanced technology to ensure smooth
            gameplay and lag-free experience. Download the Cypher Neo Games app
            to know more about our games and gaming policies. We are sure you
            will find that will interest you.
          </p>

          {/* Features Section */}
          <h3>Key Features of Online Gaming Tournaments on Cypher Neo Games</h3>
          <ul>
            <li>
              <strong>Experience responsible gaming:</strong>
              <p>
                Real cash games are fun, but only with responsible gaming. We
                guarantee a safe and fun gaming experience for all of our
                players.
              </p>
            </li>
            <li>
              <strong>Cypher Neo Games Cares</strong>{" "}
              <p>
                The Cypher Neo Games Cares feature is all about creating a
                balanced and enjoyable gaming experience for everyone. This
                feature helps you plan your gaming time and take breaks when
                required.
              </p>
            </li>
            <li>
              <strong>Rummy School</strong>{" "}
              <p>
                Cypher Neo Games Rummy School helps new users learn how to play
                the game and become better players. The rules are explained in a
                simple and clear manner so that players of all levels can
                understand the rules of the games and begin playing on the
                Cypher Neo Games app.
              </p>
            </li>
            <li>
              <strong>Trust:</strong>
              <p>
                Over the last 18 years, the Cypher Neo Games online platform has
                built trust amongst 7 Cr+ players. Through our fair play
                measures no bots can access the game, only genuine players can.
              </p>
            </li>
            <li>
              <strong>Freeroll Tournaments</strong>{" "}
              <p>
                Our daily free tournaments give you a chance to win your share
                of a ₹45 lakhs pool. So, what are you waiting for? Download the
                Cypher Neo Games app and get playing.
              </p>
            </li>
            <li>
              <strong>VIP Hosts:</strong>
              <p>
                You will be provided a dedicated VIP host, who will create
                personalised games only for you. Your invitation depends on the
                number of points/merits earned by playing various Cypher Neo
                Games. Keep playing to become a VIP. Being a part of the VIP
                club, you will be offered benefits such as welcome bonuses,
                personalised offers, special occasion gifts, surprise bonus,
                priority service, and VIP-only tournaments.
              </p>
            </li>
            <li>
              <strong>Generous Welcome Bonus:</strong>{" "}
              <p>
                We offer a generous welcome bonus to get you started and help
                you win your share of the prize pool.
              </p>
            </li>
            <li>
              <strong>Responsive customer support:</strong>
              <p>
                Our responsive customer support service ensures assistance
                during games and autoplay to ensure you are not far from the
                table.
              </p>
            </li>
            <li>
              <strong>Set limits:</strong>{" "}
              <p>
                Limit your time and money spent on our gaming app. Cypher Neo
                Games's gaming control tools help you balance gaming with other
                life activities. You can control how you play the game; you can
                set deposit limits, track your gaming history, and even schedule
                breaks to ensure a balanced gaming experience.
              </p>
            </li>
            <li>
              <strong>Certifications:</strong>
              <p>
                With multiple certifications and security measures in place,
                such as Digicert, iTech Labs certification, and an age limit, we
                control the happenings on the platform to keep it safe and sure.
                The Cypher Neo Games platform is 100% safe and secure.
              </p>
            </li>
            <li>
              <strong>Money Back:</strong>{" "}
              <p>
                If your KYC documents are in place, then you can avail of the
                instant withdrawal facility provided by the platform. It is
                essential to keep the documents in place for a seamless
                experience.
              </p>
            </li>
            <li>
              <strong>Certifications:</strong>
              <p>
                With multiple certifications and security measures in place,
                such as Digicert, iTech Labs certification, and an age limit, we
                control the happenings on the platform to keep it safe and sure.
                The Cypher Neo Games platform is 100% safe and secure.
              </p>
            </li>
            <li>
              <strong>The Beginning:</strong>{" "}
              <p>
                We started as a web portal in 2006 with the idea of bringing
                online games to a wider audience and our little idea made us
                India's first-ever rummy portals.
              </p>
            </li>
            <li>
              <strong>Wide Range:</strong>
              <p>
                We have over 6+ crore players, making us one of India's largest
                and most trusted online gaming portals with a variety of games
                designed to entertain various audiences. All our games can be
                played by beginners as well as seasoned players.
              </p>
            </li>
            <li>
              <strong>Random Number Generation Certification:</strong>{" "}
              <p>
                We earned a certification from iTech Labs for the fair game
                facility, which is globally accepted.
              </p>
            </li>
            <li>
              <strong>Feel Supported:</strong>{" "}
              <p>
                Excessive gaming can cause you to spend more than you can afford
                and make you feel anxious or upset when you're not winning. Our
                resources and customer support help us identify and address
                problematic behaviours.
              </p>
            </li>
            <li>
              <strong>Take breaks:</strong>
              <p>
                To avoid burnout, take breaks from gaming. We recommend
                scheduling gaming times to avoid interfering with daily life.
              </p>
            </li>
            <li>
              <strong>Security and Fair Play:</strong>{" "}
              <p>
                We prioritise player safety. Our platform protects your data and
                ensures fair play with advanced security. Transparency and trust
                in gaming are our priorities. We promote responsible gaming at
                Cypher Neo Games. We strive to keep our platform safe and fun.
                Enjoy our online cash games safely by following these
                responsible gaming practices.
              </p>
            </li>
          </ul>
          <h3>Why choose the Cypher Neo Games online gaming platform?</h3>
          <ul>
            <li>
              <strong>Advanced Security:</strong>
              <p>
                We protect players with cutting-edge security protocols. All
                Cypher Neo Games transactions are protected by 2048-bit SSL
                encryption, protecting personal and financial data.
              </p>
            </li>
            <li>
              <strong>Fair Play Commitment:</strong>{" "}
              <p>
                Our games use a certified Random Number Generator (RNG) to
                shuffle and deal cards impartially. iTech Labs Australia, a
                reputable organisation, has certified our RNG. This ensures fair
                play and impartial results in all our games, boosting player
                trust.
              </p>
            </li>
            <li>
              <strong>Fraud Prevention:</strong>{" "}
              <p>
                We have several measures in place. Player seating is random, so
                they cannot predict or control it. We also monitor IP addresses
                to prevent players from the same location from sharing a table,
                reducing collusion. Our anti-fraud algorithms monitor every game
                move to ensure fairness and competition.
              </p>
            </li>
            <li>
              <strong>Internet disconnection:</strong>
              <p>
                For internet outages or disconnections, Cypher Neo Games has a
                strong framework in place. Disconnected players aren't excluded
                from the game; the system activates auto-play to protect their
                interests until they reconnect.
              </p>
            </li>
            <li>
              <strong>Continuous Security:</strong>{" "}
              <p>
                Our platform is constantly updated to ensure that our security
                protocols address new threats. We constantly assess and improve
                our security to avoid threats.
              </p>
            </li>
            <li>
              <strong>No Bots:</strong>
              <p>
                Cypher Neo Games doesn't allow bots to make sure only real
                players play against each other. All players on our platform are
                verified and have completed KYC, ensuring fairness. Cypher Neo
                Games offers safe and fun online gaming by enforcing strict
                security and fair play. We have always been committed to player
                safety and well-being. Cypher Neo Games offers one of the safest
                online cash gaming experiences.
              </p>
            </li>
          </ul>
          <h3>Getting started with Cypher Neo Games</h3>

          <ul>
            <li>
              <strong>
                Download the Cypher Neo Games app from Google Play or Apple App
                Store to start your journey. Choose from a variety of games to
                play.
              </strong>
            </li>
            <li>
              <strong>
                Register/Sign Up: Enter the Cypher Neo Games app and tap “sign
                up.” Enter your phone number and email address.
              </strong>{" "}
            </li>
            <li>
              <strong>
                Verify your account: Your mobile number or email address will
                receive an OTP after registration. You must verify your account
                with this OTP to increase security and trust.
              </strong>{" "}
            </li>
            <li>
              <strong>
                KYC Details: Verify your KYC (know your customer) for a smooth
                withdrawal and gaming experience. Accessing all gaming app
                features, including withdrawals and cash games, requires this
                step. These details will be part of your profile.
              </strong>{" "}
            </li>
          </ul>
          <h3>How does the platform work?</h3>

          <ul>
            <li>
              <strong>Quick Withdrawals and Deposits:</strong>
              <p>
                We offer lightning-fast withdrawals on our platform for your
                winnings. You can add money to the wallet and begin playing
                games that have cash tournaments. So, get playing with the
                Cypher Neo Games app.{" "}
              </p>
            </li>
            <li>
              <strong>Enjoy bonuses and rewards:</strong>{" "}
              <p>
                Start your Cypher Neo Games app journey with a sign-up bonus. We
                also have free tournaments that help you learn new skills and as
                well as tutorials to help you learn more about the games.
              </p>
            </li>
            <li>
              <strong>Play in a safe environment:</strong>{" "}
              <p>
                The platform ensures that all games and gamers are treated
                fairly with measures to prevent fraud.
              </p>
            </li>
          </ul>
          <h3>
            What are the different types of games on the Cypher Neo Games app?
          </h3>
          <ul>
            <li>
              <strong>Rummy:</strong>
              <p>
                One of the most popular cash games, it tests players' ability to
                skillfully win over the players by building win sets and
                sequences more quickly. Cypher Neo Games has multiple rummy
                variants, such as Run Rummy, Pool Rummy, and more. Indian Rummy
                is the most widely played Cypher Neo Games , followed by Run
                Rummy. Each of these games have different rules, and it is
                important to know them before you enter a tournament. Download
                the Cypher Neo Games app, improve your skills.
              </p>
            </li>
            <li>
              <strong>Poker:</strong>{" "}
              <p>
                Poker: Poker is one of the most widely played card games, where
                players place bets based on the cards they have. Each player is
                dealt a card face down and 5 cards face up that are visible to
                all the players. You need to use the 2 cards face-down along
                with the 5 cards face-up to form the strongest hand. At the
                beginning of the game, each player is given a set number of
                chips that are used to place their bets. The player with the
                strongest hand at the end wins all the chips that were placed
                during the different round. It's all about having a good hand,
                making smart choices, taking risks, and being strategic enough
                to stay in the game!
              </p>
            </li>
          </ul>
        </div>
      )}

      {/* Read More/Show Less Button */}
      <button className="read-more-button" onClick={toggleDetails}>
        {expanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default AboutSection;
