import React from "react";
import { Accordion } from "react-bootstrap";
const Question = () => {
  return (
    <section
      id="questions"
      className="p-5 bg-dark"
      style={{ fontFamily: "Signika" }}
    >
      <h2 className="text-center text-light mb-4" style={{ fontSize: "42px" }}>
        Frequently Asked Questions
      </h2>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>When do I have to order by?</Accordion.Header>
          <Accordion.Body>
            Customers need to place their orders for meals at least 11 pm the
            night before their intended day of delivery or else they will have
            to choose to get it delivered on a later day in the week.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>When do you deliver?</Accordion.Header>
          <Accordion.Body>
            We deliver all your meals for the week depending on your choice of
            either Monday, Wednesday, or Friday. Deliveries happen between 6pm -
            7:30pm EST.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Why can't I order less than 4 meals?
          </Accordion.Header>
          <Accordion.Body>
            We understand our customers are busy and sometimes chaotically busy.
            As a result, we’d rather have our customers receive all their meals
            for the week in one swoop than them stressing about single off
            deliveries and ordering.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Can I just heat the container the meals come in?
          </Accordion.Header>
          <Accordion.Body>
            Yes, of course! Our meals are intended to be brought out of the
            fridge and reheated. No need to waste any cutlery, bowls, or dishes.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            How do I partner with Mirchi Meals?
          </Accordion.Header>
          <Accordion.Body>
            Mirchi Meals is always considering new partners to help fuel our fan
            base throughout the week, shoot us an email at
            inquiries@mirchimeals.com.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>How do you ensure quality?</Accordion.Header>
          <Accordion.Body>
            Silly goose! Each customer is as equal as our family member. We hand
            pick the best foods after tasting them, to ensure we can provide the
            best quality to you.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="6">
          <Accordion.Header>
            Why do your meals remind me of home?
          </Accordion.Header>
          <Accordion.Body>It's just what we do best.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default Question;
