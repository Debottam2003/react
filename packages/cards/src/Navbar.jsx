import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function ModernTopNavBar() {
  const [current, setCurrent] = useState("home");
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const menuItems = [
    { label: "Home", key: "home" },
    { label: "Features", key: "features" },
    { label: "Pricing", key: "pricing" },
    { label: "About", key: "about" },
    { label: "Contact", key: "contact" },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: "linear-gradient(90deg, #1b1b2f, #22223b)",
        boxShadow: "0 2px 15px rgba(0,0,0,0.5)",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}
    >
      {/* Logo */}
      <div style={{ color: "#1890ff", fontSize: 24, fontWeight: 700 }}>
        MySaaS
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <Menu
          onClick={handleClick}
          selectedKeys={[current]}
          mode="horizontal"
          theme="dark"
          style={{ backgroundColor: "transparent", borderBottom: "none" }}
          items={menuItems}
        />

        <Button
          type="primary"
          style={{
            background: "#1890ff",
            border: "none",
            borderRadius: "20px",
            fontWeight: 600,
            padding: "0 24px",
            height: 40,
            transition: "all 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#40a9ff")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#1890ff")}
        >
          Sign Up
        </Button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="mobile-menu" style={{ display: "none" }}>
        <MenuOutlined
          style={{ fontSize: 28, color: "#fff" }}
          onClick={() => setDrawerVisible(true)}
        />
      </div>

      {/* Drawer for Mobile */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        visible={drawerVisible}
        bodyStyle={{ backgroundColor: "#1b1b2f", color: "#fff" }}
        headerStyle={{ backgroundColor: "#1b1b2f", color: "#fff" }}
      >
        <Menu
          onClick={(e) => {
            handleClick(e);
            setDrawerVisible(false);
          }}
          selectedKeys={[current]}
          mode="vertical"
          theme="dark"
          items={menuItems}
          style={{ backgroundColor: "transparent" }}
        />
        <Button
          type="primary"
          style={{
            marginTop: 24,
            width: "100%",
            background: "#1890ff",
            border: "none",
            borderRadius: "12px",
            fontWeight: 600,
            height: 42,
          }}
        >
          Sign Up
        </Button>
      </Drawer>
    </div>
  );
}
