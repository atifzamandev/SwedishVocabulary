1. Main Frame (Desktop)

Create a frame:

Frame: Home Page
Width: 1440px
Height: ~900px
Layout: Vertical
Background: Sky gradient

Background

Gradient
#2E66B6 → #9EC6E8
Overlay: cloud illustration
2. Header / Navigation Bar

Create a Top Navigation Frame

Height: 80px
Layout: Horizontal Auto Layout
Padding: 24px 60px
Spacing: Space Between
Background: Linear Gradient
#2F5EA8 → #3E7BD8
Left Side

Text Layer:

Learn Swedish Vocabulary
Font: Inter / Poppins
Weight: Bold
Size: 28px
Color: White
Right Side Buttons

Button 1:

Log In
Height: 40
Padding: 16px 24px
Border Radius: 8
Background: #3C6ED3
Text: White

Button 2:

Sign Up
Height: 40
Padding: 16px 24px
Border Radius: 8
Background: #5DA7FF
Text: White
3. Hero Section

Create Hero Frame

Width: Fill container
Height: 360px
Auto Layout: Vertical
Align: Center
Spacing: 20
Title
Learn Swedish Vocabulary!
Font: Inter
Weight: Bold
Size: 52px
Color: #1F4E8C
Subtitle
Improve your Swedish vocabulary through fun, interactive games free!
Font: Inter
Size: 20px
Color: #3A5C7A
Primary Button
Start Learning
Width: 240
Height: 60
Radius: 12
Gradient: #6EDC64 → #3FAE3F
Shadow: soft drop shadow
Text: White Bold 22px
4. Category Cards Section

Create a Card Container

Auto Layout: Horizontal
Spacing: 30
Align: Center
Padding Top: 40

Inside create 4 reusable components.

5. Vocabulary Card Component

Create a Card Component

Width: 260
Height: 260
Radius: 14
Background: Light pastel gradient
Shadow: Soft
Layout: Vertical
Spacing: 10
Padding: 16

Structure:

Card
 ├── Image
 ├── Category Title
 └── Start Button
Card 1 — Body Parts

Background:

#CFE8FF

Content:

Image: body parts illustration
Title: Body Parts
Button: Start

Button style:

Width: 140
Height: 40
Radius: 8
Color: #4CAF50
Text: White
Card 2 — Fruits

Background:

#FFE7B5

Title:

Fruits
Card 3 — Vegetables

Background:

#DFF4D7

Title:

Vegetables
Card 4 — Groceries

Background:

#FFF2C8

Title:

Groceries
6. Footer

Footer Frame

Height: 80
Auto Layout: Horizontal
Padding: 0 60
Align: Space Between
Background: Light gray

Left Links

About
Contact
Help

Font:

Size: 16
Color: #6B7C93

Right Text

© 2024 SwedishVocab.com
7. Component System (Important)

Create reusable components:

Components
 ├── Navbar
 ├── Primary Button
 ├── Category Card
 └── Footer

Then use instances on the page.

8. Suggested Fonts

Use:

Inter
Poppins
Nunito

These work well for learning apps and games.

9. Auto Layout Structure

Your page structure should look like this in Figma:

Home Page
 ├── Navbar
 ├── Hero Section
 │     ├── Title
 │     ├── Subtitle
 │     └── Start Learning Button
 ├── Category Cards
 │     ├── Body Parts Card
 │     ├── Fruits Card
 │     ├── Vegetables Card
 │     └── Groceries Card
 └── Footer