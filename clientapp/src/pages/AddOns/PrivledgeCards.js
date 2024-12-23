import React from "react";
import styles from "./PrivledgeCards.module.css";
import frontPrivledge from "../../assets/images/privcard.png";
import backPrivledge from "../../assets/images/backprivcard.png";
import styled from "styled-components";

const TableWrapper = styled.div`
  padding: 20px;
  max-width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  min-width: 900px;
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 18px; /* Increase the font size for better readability */
`;

const TableHead = styled.th`
  background-color: #333;
  color: white;
  padding: 15px;
  border: 1px solid #ddd; /* Add border to table header */
  font-size: 26px;
  font-weight: bold;
  text-align: center;
`;

const TableCell = styled.td`
  background-color: rgb(22, 22, 22);
  color: white;
  padding: 22px;
  font-size: 20px;

  border: 1px solid #ddd; /* Add border to table cells */
  word-wrap: break-word;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #555;
  }

  &:hover {
    background-color: #666;
  }
`;

const Link = styled.a`
  color: rgb(212, 2, 2); /* Link color */
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: blue; /* Underline link on hover */
  }
`;

export default function PrivledgeCards() {
  const data = [
    {
      name: "Merrys Garage",
      discount: "10% off the final bill for any work in the garage",
      contact:
        "Pritt – 02476225172  https://www.facebook.com/profile.php?id=100057298884921",
    },
    {
      name: "Muny Luxe",
      discount: "£50 off any training courses, 10% off any services",
      contact:
        "Chelsea – 07518919876 https://www.instagram.com/munyluxe?igsh=MWo0ZHVpMmU2bXU0",
    },
    {
      name: "VV Phones",
      discount: "10% discount on any final bill over £50",
      contact: "Manager – 07507182962 https://www.facebook.com/vvphonerepairs",
    },
    {
      name: "Dean’s Dessert",
      discount: "Free ‘simple me’ when you spend over £15",
      contact:
        "Dean – 07944554680 https://www.facebook.com/profile.php?id=100063886427482",
    },
    {
      name: "Tropic Vegan Products",
      discount: "Free hand cream for all orders over £40",
      contact: "Alison – 07547944157 https://www.facebook.com/tropicbyalison",
    },
    {
      name: "SAY Stylists",
      discount: "50% off first services, inc – nails, hair & beauty",
      contact:
        "General Phone – 07823758690 https://www.instagram.com/saystylists",
    },
    {
      name: "Tays Bespoke Treats",
      discount: "10% off any order over £30",
      contact:
        "Facebook Page – Tays Bespoke Treats https://www.facebook.com/profile.php?id=100086359977403",
    },
    {
      name: "By. ellebrown",
      discount: "50% off first set of eyelashes",
      contact:
        "Insta Page – by. ellebrown https://www.instagram.com/by.ellebrown",
    },
    {
      name: "Becka’s Aesthetics",
      discount: "10% off all treatments",
      contact:
        "Facebook Page – Becka’s Aesthetics https://www.facebook.com/Beckalashes",
    },
    {
      name: "Adams Eye Test",
      discount: "Free eye test on your first visit",
      contact:
        "Facebook Page – Adams Eye Heath Opticians https://www.facebook.com/profile.php?id=100054542856588",
    },
    {
      name: "Cafe 101",
      discount: "10% off orders over £30",
      contact: "Cafe 101 - 07956793727",
    },
  ];

  return (
    <div className={styles.CardPage}>
      <div className={styles.Cardcontainer}>
        <div className={styles.CardHomeBanner}>
          <div className={styles.opicity}></div>
          <section>
            <div className={styles.Cardheader}>
              <h2>Our Privledge Cards</h2>
            </div>
          </section>
        </div>
        {/* /////////////////////////////////////////////////////// */}
        <section className={styles.Card2ndContainer}>
          <div className={styles.PrivledgeCardsHeader}>
            <h2>Privledge Cards</h2>
          </div>
          <div className={styles.PrivledgeCards}>
            <div className={styles.PrivledgeCardsDiv}>
              <img src={frontPrivledge} alt="Privledge-card" />
            </div>
            <div className={styles.PrivledgeCardsDiv}>
              <img src={backPrivledge} alt="Privledge-card" />
            </div>
          </div>

          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <TableHead>Business Name</TableHead>
                  <TableHead>Discount Confirmed</TableHead>
                  <TableHead>Contact Details</TableHead>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.discount}</TableCell>
                    <TableCell>
                      {item.contact.split(" ").map((text, idx) => {
                        // Check if it's a URL and render it as a clickable link
                        return /^(https?:\/\/)/.test(text) ? (
                          <Link href={text} target="_blank" key={idx}>
                            {text}
                          </Link>
                        ) : (
                          <span key={idx}>{text} </span>
                        );
                      })}
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        </section>
      </div>
    </div>
  );
}
