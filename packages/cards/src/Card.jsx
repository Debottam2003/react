import { Card, Button } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const buttonColor = "#1890ff"; // uniform button color

// Master list of all possible features
const allFeatures = [
  "Feature A",
  "Feature B",
  "Feature C",
  "Feature D",
  "Priority Support",
  "Advanced Analytics",
];

const plans = [
  {
    id: 1,
    title: "Basic",
    price: "$9",
    period: "/month",
    features: ["Feature A", "Feature B", "Feature C"],
    popular: false,
    img: "https://undraw.co/api/illustrations/undraw_startup_life_re_6f7d.svg",
  },
  {
    id: 2,
    title: "Pro",
    price: "$29",
    period: "/month",
    features: ["Feature A", "Feature B", "Feature C", "Feature D"],
    popular: true,
    img: "https://undraw.co/api/illustrations/undraw_rocket.svg",
  },
  {
    id: 3,
    title: "Premium",
    price: "$59",
    period: "/month",
    features: ["Feature A", "Feature B", "Feature C", "Feature D", "Priority Support", "Advanced Analytics"],
    popular: false,
    img: "https://undraw.co/api/illustrations/undraw_crown.svg",
  },
];

export default function ConsistentFeatureCards() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "32px",
        justifyContent: "center",
        padding: "60px",
        backgroundColor: "#1b1b2f",
        minHeight: "100vh",
      }}
    >
      {plans.map((plan) => (
        <Card
          key={plan.id}
          hoverable
          style={{
            width: 320,
            borderRadius: "20px",
            background: "#2a2a40",
            color: "#fff",
            overflow: "hidden",
            position: "relative",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            boxShadow: plan.popular
              ? `0 15px 40px ${buttonColor}55`
              : "0 8px 25px rgba(0,0,0,0.4)",
          }}
          bodyStyle={{ padding: 32 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = `0 20px 50px ${buttonColor}88`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = plan.popular
              ? `0 15px 40px ${buttonColor}55`
              : "0 8px 25px rgba(0,0,0,0.4)";
          }}
        >
          {plan.popular && (
            <div
              style={{
                position: "absolute",
                top: 16,
                right: 16,
                backgroundColor: buttonColor,
                color: "#fff",
                padding: "4px 14px",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: 12,
              }}
            >
              Most Popular
            </div>
          )}

          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <img
              src={plan.img}
              alt={plan.title}
              style={{ width: 100, height: 100, objectFit: "contain" }}
            />
          </div>

          <h3 style={{ textAlign: "center", fontSize: 26, fontWeight: 700, marginBottom: 12 }}>
            {plan.title}
          </h3>
          <p style={{ textAlign: "center", fontSize: 32, fontWeight: 700, marginBottom: 24 }}>
            {plan.price} <span style={{ fontSize: 16, fontWeight: 500 }}>{plan.period}</span>
          </p>

          <ul style={{ listStyle: "none", paddingLeft: 0, marginBottom: 32 }}>
            {allFeatures.map((feature, index) => {
              const included = plan.features.includes(feature);
              return (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 12,
                    fontSize: 16,
                    color: included ? "#ccc" : "#555",
                  }}
                >
                  {included ? (
                    <CheckOutlined style={{ color: buttonColor, marginRight: 10, fontSize: 16 }} />
                  ) : (
                    <CloseOutlined style={{ color: "#888", marginRight: 10, fontSize: 16 }} />
                  )}
                  {feature}
                </li>
              );
            })}
          </ul>

          <Button
            type="primary"
            style={{
              width: "100%",
              borderRadius: "12px",
              height: 46,
              fontWeight: 700,
              fontSize: 16,
              background: buttonColor,
              border: "none",
              color: "#fff",
            }}
          >
            Subscribe
          </Button>
        </Card>
      ))}
    </div>
  );
}
