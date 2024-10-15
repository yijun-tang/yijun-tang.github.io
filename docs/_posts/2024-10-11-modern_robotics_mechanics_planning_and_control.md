---
layout: post
title: "Modern Robotics: Mechanics, Planning, and Control"
categories: robotics
---

### 0. Preface

More resources on [website](https://hades.mech.northwestern.edu/index.php/Modern_Robotics).

> ?? 

> What is Modern Screw Theory?

> What is Modern Differential Geometry?

### 1. Preview

The ultimate goal of robotics is to create machines that can **behave and think like humans**.

The **robot mechanism** is usually constructed by connecting rigid bodies, called **links**, together by means of **joints**, so that relative motion between adjacent links becomes possible. The joints are typically **actuated** by electric motors (AC or DC motors, stepper motors etc.). The ideal motor should operate at relatively low rotational speeds, and be able to generate large forces and torques. So **speed reduction** and **torque amplification** are required. Additionally, the **brakes** may also be attached to stop the robot quickly or to keep a stationary posture.

Sensors are used to measure displacement, velocity, force, torque, and localization.


### 2. Configuration Space

Robot's **configuration**: a specification of the positions of all points of the robot.

The number of **degrees of freedom (dof)** of a robot is the smallest number of real-valued coordinates needed to represent its configuration.

The n-dimensional space containing all possible configurations of the robot is called the **configuration space (C-space)**.

#### 2.1 Degrees of Freedom of a Rigid Body

The general rule for determining the number of degrees of freedom of a system:

```txt
degrees of freedom = (sum of freedoms of the points) - (number of independent constraints)
```

For robots consist of rigid bodies, the degrees of freedom:

```txt
degrees of freedom = (sum of freedoms of the bodies) - (number of independent constraints)
```

#### 2.2 Degrees of Freedom of a Robot

![Typical robot joints](/assets/2024-10-11-modern_robotics_mechanics_planning_and_control/figure2-3.png)
