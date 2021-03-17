import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import CartItem from "./CartItem/CartItem";
import { useHistory } from "react-router-dom";
import { deleteCartItem, deleteAllItem } from "../../Redux/Cart/cart-action";
import PayPalButton from "../../components/PayPal/PayPalButton";
import PopOver from "../../components/PopOver/PopOver";
import TextField from "@material-ui/core/TextField";
import axios from 'axios';
const Checkout = ({
  customDomain,
  userDomain,
  cartItem,
  deleteItem,
  hostingPack,
  delteAllItem,
  translation,
}) => {
  const [clientId, setClientId] = useState("");
  const [popModel, setPopModel] = useState(false);
  const [popMessage, setPopMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailCheck, setEmailCheck] = useState({
    id: "outlined-basic",
  });
  const [password,setPassword] = useState('');
  const [confirmpassword,setComfirmpassword] = useState('');
  const [adress,setAdress] = useState('');
  const [city,setCity] = useState('');
  const [state,setState] = useState('');
  const [country,setCountry] = useState('');
  const [zipcode,setZipcode] = useState('');
  function add_years(dt,n) 
  {
    return new Date(dt.setFullYear(dt.getFullYear() + n));      
  }
  var e =  new Date();
  const nowdate = new Date;
  const [domainprice,setDomainPrice] = useState();
  const [dip,setDip] = useState(0);
  const [SsL,setSsl] = useState('Free SSL');
  useEffect(()=>{
    for(var i = 0;i<cartItem.length;i++){
      if(cartItem[i].Package_Name_English==="Domain - Registration"){
        setDomainPrice(cartItem[i].Price);
      }
      if(cartItem[i].Package_Name_English==="Dedicated IP address") setDip(true);
      if(cartItem[i].Package_Name_English==="SSL - GlobalSign & Wildcard") setSsl('SSL - GlobalSign & Wildcard');
    }
  },[])

  const onsubmitbutton = async () =>{
      var date = add_years(e,1);
      var hdate = add_years(new Date(),hostingPack.Billing_Year);
      const order_details = {
      Email: email,
      Name: firstName + " " + lastName,
      Order_ID: new Date().valueOf(),
      Total: priceCounter(cartItem),
      HostingName: hostingPack.Package_Name_English,
      HostingBillingCycle : hostingPack.Billing_Year,
      HostingRegistrationDate : nowdate,
      HostingNextDueDate : hdate,
      SSL_StartDate : nowdate,
      SSL_ExpiryDate : date,
      DomainName : userDomain==='test'?customDomain:null,
      UserOwnDomain : userDomain==='test'?null:userDomain,
      DomainRegistration : userDomain==='test'?nowdate:null,
      DomainNextDueDate : userDomain==='test'?date:null,
      DomainFirstPaymentAmmount : userDomain==='test'?domainprice:null,
      DomainRecurringAmmount : userDomain==='test'?domainprice:null,
      Dedicated_IP : dip,
      SSL_Issuer_Name : SsL,
      Delivered: false,
    }
    console.log(order_details)


    await fetch(`${process.env.REACT_APP_BACKEND_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order_details),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });


      

      await axios
        .post(process.env.REACT_APP_BACKEND_URL+'/auth/local/register', {
          username: email,
          email: email,
          password: password,
          Adress : adress,
          City : city,
          State : state,
          ZipCode : zipcode,
          Country : country,
        })
        .then(response => {
          alert('hello baby')


        })
        .catch(error => {
          // Handle error.
          console.log('An error occurred:', error.response);
        });


  }
  

  let history = useHistory();
  console.log("User Domain: ", userDomain);

  const handleHostingDelete = (item) => {
    deleteItem(item);
  };
  const validateEmail = (event) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(event.target.value).toLowerCase())) {
      setEmail(event.target.value);
      setEmailCheck({
        id: "outlined-basic",
      });
      setEmailError(false);
    } else {
      setEmailCheck({
        error: true,
        helperText:
          translation === "Hebrew"
            ? "הכנס כתובת אימייל תקינה"
            : "Enter a valid Email address",
        id: "outlined-error-helper-text",
      });
      setEmail(event.target.value);
      setEmailError(true);
    }
  };
  const priceCounter = (items) => {
    return items.reduce((accumulator, currentValue) => {
      if (
        Object.prototype.hasOwnProperty.call(
          currentValue,
          "Two_Year_Package_Price"
        )
      ) {
        return (
          accumulator +
          billingYearPrice(currentValue, hostingPack.Billing_Year) *
            (hostingPack.Billing_Year * 12)
        );
      } else {
        return accumulator + currentValue.Price;
      }
    }, 0);
  };


  const billingYearPrice = (item, year) => {
    if (year === 1) {
      return item.Price;
    } else if (year == 2) {
      return item.Two_Year_Package_Price;
    } else if (year == 3) {
      return item.Three_Year_Package_Price;
    }
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/pay-pal`)
      .then((res) => res.json())
      .then((data) => setClientId(data.Client_Id));
  }, []);

  const orderDetailsGenerator = (cartItem) => {
    let details = "";
    cartItem.map((item) => {
      if (
        Object.prototype.hasOwnProperty.call(item, "Two_Year_Package_Price")
      ) {
        details +=
          item.Package_Name_English +
          " web hosting for " +
          hostingPack.Billing_Year +
          " year total: $" +
          `${
            billingYearPrice(item, hostingPack.Billing_Year) *
            (hostingPack.Billing_Year * 12)
          }` +
          " USD" +
          "\n";
      } else {
        details +=
          item.Package_Name_English + " price: $" + item.Price + " USD" + "\n";
      }
    });
    return details;
  };

  console.log(CartItem)

  const onSuccess = () => {
    setPopModel(true);
    setPopMessage(
      `${
        translation === "Hebrew"
          ? "התשלום הצליח. תודה על קנייתך. מפנה לדף הבית ...."
          : "Payment Successful. Thanks for your purchase. Redirecting to homepage...."
      }`
    );
    const orderDetails = {
      Email: email,
      Name: firstName + " " + lastName,
      Order_ID: new Date().valueOf(),
      Total: priceCounter(cartItem),
      Details: orderDetailsGenerator(cartItem),
      Delivered: false,
    };
    fetch(`${process.env.REACT_APP_BACKEND_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        history.push("/");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onError = () => {
    setPopModel(true);
    setPopMessage(
      `${
        translation === "Hebrew"
          ? "התשלום לא הצליח. משהו השתבש. אנא נסה שוב"
          : "Payment Unsuccessful. Something went wrong please try again"
      }`
    );
  };

  const onCancel = () => {
    setPopModel(true);
    setPopMessage(
      `${
        translation === "Hebrew"
          ? "התשלום בוטל. בבקשה נסה שוב."
          : "Payment Canceled. Please try again"
      }`
    );
  };

  const popModelClose = () => {
    setPopModel(false);
    setPopMessage("");
  };

  return (
    <>
      <Header blackBack={true} />
      <div className="checkout-page container">
        <h1>
          {translation === "Hebrew" ? "סקירה וקופה" : "Review & Checkout"}
        </h1>
        <div className="row">
          <div
            className={`checkout-page-cart-items col-md-7 col-lg-7 ${
              translation === "Hebrew" ? "offset-md-1 offset-lg-1" : ""
            }`}
          >
            {cartItem.length ? (
              <>
                <div className="row cart-items-header d-flex justify-content-between">
                  <div className="col-md-7 col-lg-7">
                    <p>
                      {translation === "Hebrew"
                        ? "מוצר / אפשרויות"
                        : "Product/Options"}
                    </p>
                  </div>
                  <div className="col-md-5 col-lg-5">
                    <p>
                      {translation === "Hebrew"
                        ? "מחיר / מחזור"
                        : "Price/Cycle"}
                    </p>
                  </div>
                </div>

                <hr />

                {customDomain ? (
                  <>
                    {cartItem.map((item, key) => {
                      return (
                        <>
                          <CartItem
                            key={key}
                            item={item}
                            domainName={customDomain}
                            deleteItem={handleHostingDelete}
                            priceWithYear={billingYearPrice}
                            billingYear={hostingPack.Billing_Year}
                          />
                          <hr />
                        </>
                      );
                    })}
                  </>
                ) : userDomain ? (
                  cartItem.map((item, key) => {
                    return (
                      <>
                        <CartItem
                          key={key}
                          item={item}
                          domainName={userDomain}
                          deleteItem={handleHostingDelete}
                          priceWithYear={billingYearPrice}
                          billingYear={hostingPack.Billing_Year}
                        />
                        <hr />
                      </>
                    );
                  })
                ) : null}

                <div className="row cart-items-actions d-flex justify-content-between">
                  <div className="col-md-3 col-lg-3">
                    <button onClick={() => history.push("/cart")}>
                      <i class="fas fa-arrow-left"></i>
                      {translation === "Hebrew" ? " תחזור " : " Go Back "}
                    </button>
                  </div>
                  <div className="col-md-3 col-lg-3">
                    <button
                      onClick={() => {
                        delteAllItem();
                        history.push("/hosting");
                      }}
                    >
                      <i class="fas fa-trash"></i>{" "}
                      {translation === "Hebrew" ? "עגלה ריקה" : " Empty Cart "}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <h1 className="text-center">
                {" "}
                {translation === "Hebrew"
                  ? "העגלה שלך ריקה."
                  : "Your Cart is Empty."}
              </h1>
            )}
          </div>

          <div
            className={`order-summary col-md-4 col-lg-4 ${
              translation === "Hebrew" ? "" : "offset-md-1 offset-lg-1"
            } `}
          >
            <h3 className="text-center">
              {" "}
              {translation === "Hebrew" ? "סיכום הזמנה" : "Order Summary"}
            </h3>

            {cartItem.length
              ? cartItem.map((item, key) => (
                  <div
                    key={key}
                    className="order-item d-flex justify-content-between"
                  >
                    <p>{item.Package_Name_English}</p>
                    {Object.prototype.hasOwnProperty.call(
                      hostingPack,
                      "Billing_Year"
                    ) &&
                    Object.prototype.hasOwnProperty.call(
                      item,
                      "Two_Year_Package_Price"
                    ) ? (
                      <p>
                        ${billingYearPrice(item, hostingPack.Billing_Year)} x{" "}
                        {hostingPack.Billing_Year * 12} -{" "}
                        {billingYearPrice(item, hostingPack.Billing_Year) *
                          (hostingPack.Billing_Year * 12)}{" "}
                        USD
                      </p>
                    ) : (
                      <p>${item.Price}</p>
                    )}
                  </div>
                ))
              : null}

            <hr />

            <div className="order-item-subtotal d-flex justify-content-between">
              <p>{translation === "Hebrew" ? "סך הכל" : "Subtotal"}</p>
              {Object.prototype.hasOwnProperty.call(
                hostingPack,
                "Billing_Year"
              ) ? (
                <p>${priceCounter(cartItem)} USD</p>
              ) : null}
            </div>
            <p className="total-due">
              {translation === "Hebrew"
                ? 'סה"כ לפירעון היום'
                : "Total Due Today"}
            </p>
            {Object.prototype.hasOwnProperty.call(
              hostingPack,
              "Billing_Year"
            ) ? (
              <h2>${priceCounter(cartItem)} USD</h2>
            ) : null}

            {Object.prototype.hasOwnProperty.call(
              hostingPack,
              "Billing_Year"
            ) &&
            clientId &&
            firstName &&
            lastName &&
            email &&
            !emailError ? (
              <PayPalButton
                price={priceCounter(cartItem)}
                clientId={clientId}
                onCancel={onCancel}
                onSuccess={onSuccess}
                onError={onError}
              />
            ) : null}

            {popModel && popMessage ? (
              <PopOver message={popMessage} onClose={popModelClose} />
            ) : null}
          </div>
        </div>

        <div className="row billing-details">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-12">
                <h3>
                  {translation === "Hebrew" ? "פרטי תשלום" : "Billing Details"}
                </h3>
              </div>
            </div>
            <div
              className="row"
              style={{ marginBottom: "4px", marginTop: "16px" }}
            >
              <div className="col-md-6">
                <TextField
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  id="outlined-basic"
                  label={translation === "Hebrew" ? "שם פרטי" : "First Name"}
                  variant="outlined"
                />
              </div>
              <div className="col-md-6">
                <TextField
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  id="outlined-basic"
                  label={translation === "Hebrew" ? "שם משפחה" : "Last Name"}
                  variant="outlined"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <TextField
                  onChange={(e) => validateEmail(e)}
                  required
                  label={translation === "Hebrew" ? "אימייל" : "Email"}
                  variant="outlined"
                  {...emailCheck}
                />
              </div>
            </div>

            <div style={{paddingTop:'30px'}} className="row">
              <div className="col-md-12">
                  <TextField type='password' hintText='password'
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  label={translation === "Hebrew" ? "סיסמה" : "Password"}
                  variant="outlined"
                />
              </div>
           
            </div>

            <h1 className="billing-adress-txt">Billing Adress</h1>
            <div className="row">
                <div className="col-md-6">
                  <TextField
                  onChange={(e) => setAdress(e.target.value)}
                  required
                  label={translation === "Hebrew" ? "כתובת" : "Adress"}
                  variant="outlined"
                />
                </div>

                <div className="col-md-6">
                  <TextField
                  onChange={(e) => setCity(e.target.value)}
                  required
                  label={translation === "Hebrew" ? "עִיר" : "City"}
                  variant="outlined"
                />
                </div>
            
            </div>
            <div style={{height:'40px'}}/>

            <div className="row">
                <div className="col-md-6">
                  <TextField
                  onChange={(e) => setState(e.target.value)}
                  required
                  label={translation === "Hebrew" ? "מדינה" : "State"}
                  variant="outlined"
                />
                </div>

                <div className="col-md-6">
                  <TextField
                  onChange={(e) => setZipcode(e.target.value)}
                  required
                  label={translation === "Hebrew" ? "מיקוד" : "Zip Code"}
                  variant="outlined"
                />
                </div>
            
            </div>
            <div style={{height:'40px'}}/>

            <div className="row">
                <div className="col-md-12">
                  <TextField
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  label={translation === "Hebrew" ? "מדינה" : "Country"}
                  variant="outlined"
                />
                </div>

                <button onClick={onsubmitbutton} > click me</button>

            
            
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = ({ domain, cart, pages }) => ({
  customDomain: domain.Custom_Domain,
  userDomain: domain.User_Domain,
  cartItem: cart.cart,
  hostingPack: cart.hostingPack,
  translation: pages.translation,
});

const mapDisPatchToProps = (dispatch) => ({
  deleteItem: (item) => dispatch(deleteCartItem(item)),
  delteAllItem: () => dispatch(deleteAllItem()),
});

export default connect(mapStateToProps, mapDisPatchToProps)(Checkout);
