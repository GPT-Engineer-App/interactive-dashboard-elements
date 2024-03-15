import React from "react";
import { Box, Flex, Heading, Text, Input, Image, Icon, Button, Select, Grid, Progress } from "@chakra-ui/react";
import { FaSearch, FaChartLine, FaArrowUp, FaArrowDown, FaShippingFast, FaUndo, FaBan, FaBoxes, FaBuilding, FaUserFriends, FaMoneyBillWave, FaCheck, FaFileAlt, FaLink, FaChartBar, FaClipboardList, FaBullhorn, FaEnvelope, FaQuestionCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" h="100vh">
      {/* Top Bar */}
      <Flex align="center" p={4} bg="gray.100">
        {/* Logo and Title */}
        <Flex align="center" mr={8}>
          <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkb3VibGUlMjBsb29wJTIwbG9nb3xlbnwwfHx8fDE3MTA0ODExMTR8MA&ixlib=rb-4.0.3&q=80&w=1080" w={8} h={8} mr={2} />
          <Heading size="md">Dikos Dashboard</Heading>
        </Flex>

        {/* Search */}
        <Input placeholder="Search" size="md" w="30%" />

        {/* Language and User */}
        <Flex align="center" ml="auto">
          <Select placeholder="Eng (US)" w={32} mr={4}>
            <option>Eng (US)</option>
          </Select>
          <Flex align="center">
            <Image src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbXBsb3llZSUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMDQ1MjQ4MHww&ixlib=rb-4.0.3&q=80&w=1080" w={10} h={10} rounded="full" mr={2} />
            <Box>
              <Text>Andrew Starlin</Text>
              <Text fontSize="sm" color="gray.600">
                Admin
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Flex h="100%" overflow="auto">
        {/* Side Nav */}
        <Flex direction="column" w={64} p={6} bg="gray.900" color="white">
          <NavItem icon={FaChartLine} label="Dashboard" />
          <NavItem icon={FaBoxes} label="Products" />
          <NavItem icon={FaFileAlt} label="Proposal" />
          <NavItem icon={FaLink} label="Integrate" />
          <NavItem icon={FaChartBar} label="Business Insights" />
          <NavItem icon={FaClipboardList} label="Order" />
          <NavItem icon={FaBullhorn} label="Marketing Center" />
          <NavItem icon={FaEnvelope} label="Messages" />
          <NavItem icon={FaQuestionCircle} label="FAQ" />
        </Flex>

        {/* Dashboard Content */}
        <Box p={8} w="100%">
          {/* Revenue and Costs */}
          <Flex mb={8}>
            <Box bg="white" rounded="lg" p={6} shadow="md" mr={8}>
              <Text fontSize="4xl" fontWeight="bold">
                988,658
              </Text>
              <Flex align="center" mt={2}>
                <Icon as={FaArrowUp} color="green.400" mr={1} />
                <Text color="green.400">32% From Last Month</Text>
              </Flex>
              <Text fontSize="lg" mt={4}>
                Revenue
              </Text>
            </Box>
            <Box bg="white" rounded="lg" p={6} shadow="md">
              <Text fontSize="4xl" fontWeight="bold">
                489,125
              </Text>
              <Flex align="center" mt={2}>
                <Icon as={FaArrowDown} color="red.400" mr={1} />
                <Text color="red.400">32% From Last Month</Text>
              </Flex>
              <Text fontSize="lg" mt={4}>
                Costs
              </Text>
            </Box>
          </Flex>

          {/* Time Filters */}
          <Flex mb={8}>
            <Button size="sm" mr={2}>
              Today
            </Button>
            <Button size="sm" mr={2}>
              Weekly
            </Button>
            <Button size="sm" mr={2}>
              Monthly
            </Button>
            <Button size="sm">Yearly</Button>
          </Flex>

          <Grid templateColumns="repeat(2, 1fr)" gap={8}>
            {/* Transaction Status */}
            <Box bg="white" rounded="lg" p={6} shadow="md">
              <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                <StatusItem icon={FaShippingFast} label="To-process Shipment" value={25} />
                <StatusItem icon={FaShippingFast} label="Processed Shipment" value={48} />
                <StatusItem icon={FaUndo} label="Pending Return Refund" value={12} />
                <StatusItem icon={FaBan} label="Pending Cancellation" value={5} />
                <StatusItem icon={FaBan} label="Banned Products" value={2} />
                <StatusItem icon={FaBoxes} label="Sold Out Products" value={18} />
              </Grid>
            </Box>

            {/* Sales Overview */}
            <Box bg="white" rounded="lg" p={6} shadow="md">
              <Text fontSize="lg" mb={4}>
                Sale states in September 2023
              </Text>
              <Image src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaW5lJTIwZ3JhcGglMjB3aXRoJTIwdHdvJTIwbGluZXMlMkMlMjBvbmUlMjBkb3R0ZWR8ZW58MHx8fHwxNzEwNDgxMTE1fDA&ixlib=rb-4.0.3&q=80&w=1080" />
            </Box>
          </Grid>

          {/* Projects */}
          <Box bg="white" rounded="lg" p={6} shadow="md" mt={8}>
            <Text fontSize="2xl" mb={4}>
              Projects
            </Text>
            <Text fontSize="lg" color="gray.600" mb={6}>
              30 done this month
            </Text>
            <ProjectItem name="Made New Furniture" companies={2} members={5} budget={14000} progress={60} />
            <ProjectItem name="Color Furniture" companies={3} members={7} budget={16500} progress={30} />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

const NavItem = ({ icon, label }) => (
  <Flex align="center" py={2} _hover={{ bg: "gray.700" }}>
    <Icon as={icon} mr={4} />
    <Text>{label}</Text>
  </Flex>
);

const StatusItem = ({ icon, label, value }) => (
  <Flex align="center">
    <Icon as={icon} mr={2} />
    <Box>
      <Text fontSize="2xl">{value}</Text>
      <Text fontSize="sm" color="gray.600">
        {label}
      </Text>
    </Box>
  </Flex>
);

const ProjectItem = ({ name, companies, members, budget, progress }) => (
  <Box mb={4}>
    <Flex justify="space-between" mb={4}>
      <Text fontSize="lg">{name}</Text>
      <Flex>
        <Flex align="center" mr={8}>
          <Icon as={FaBuilding} mr={2} />
          <Text>{companies}</Text>
        </Flex>
        <Flex align="center" mr={8}>
          <Icon as={FaUserFriends} mr={2} />
          <Text>{members}</Text>
        </Flex>
        <Flex align="center">
          <Icon as={FaMoneyBillWave} mr={2} />
          <Text>${budget.toLocaleString()}</Text>
        </Flex>
      </Flex>
    </Flex>
    <Progress value={progress} size="sm" colorScheme="blue" />
    <Flex align="center" mt={2}>
      <Icon as={FaCheck} color="green.400" mr={2} />
      <Text>{progress}%</Text>
    </Flex>
  </Box>
);

export default Index;
