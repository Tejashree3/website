import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "../AdvanceSearch/search.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomDropdown from "../CustomDropdown/CustomDropdown";

const AdvanceSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectedLocation = (value) => {
    console.log("Location", value);
  };

  const selectedGuest = (value) => {
    console.log("Guest", value);
  };

  const selectedPrice = (value) => {
    console.log("Price", value);
  };

  const selectedType = (value) => {
    console.log("Type", value);
  };

  const selectedBedroom = (value) => {
    console.log("Bedroom", value);
  };

  const selectedBathroom = (value) => {
    console.log("Bathroom", value);
  };

  const selectedFilters = (value) => {
    console.log("More Filters", value);
  };

  return (
    <>
      <section className="box-search-advance background">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <div className="box-search shadow-sm">

                <div className="item-search">
                  <CustomDropdown
                    label="Price"
                    onSelect={selectedPrice}
                    options={["$50-$100", "$100-$200", "$200-$300", "$300+"]}
                  />
                </div>
                <div className="item-search">
                  <CustomDropdown
                    label="Type"
                    onSelect={selectedType}
                    options={["Apartment", "Villa", "Cottage", "Hotel"]}
                  />
                </div>
                <div className="item-search">
                  <CustomDropdown
                    label="Bedroom"
                    onSelect={selectedBedroom}
                    options={["1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4+ Bedrooms"]}
                  />
                </div>
                <div className="item-search">
                  <CustomDropdown
                    label="Bathroom"
                    onSelect={selectedBathroom}
                    options={["1 Bathroom", "2 Bathrooms", "3+ Bathrooms"]}
                  />
                </div>
                <div className="item-search">
                  <CustomDropdown
                    label="More Filters"
                    onSelect={selectedFilters}
                    options={["Wi-Fi", "Pool", "Parking", "Pet-friendly"]}
                  />
                </div>
                <div className="item-search bd-none">
                  <Button className="primaryBtn flex-even d-flex justify-content-center">
                    <i className="bi bi-search me-2"></i> Search
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdvanceSearch;
