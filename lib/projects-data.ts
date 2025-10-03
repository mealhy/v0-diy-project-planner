export type SkillLevel = "beginner" | "intermediate" | "pro"

export interface Material {
  id: string
  name: string
  description: string
  estimatedCost: number
  affiliateLink: string
  specifications?: string
  optional?: boolean
}

export interface Tool {
  id: string
  name: string
  description: string
  affiliateLink: string
  optional?: boolean
}

export interface Step {
  id: string
  title: string
  description: string
  beginnerTips?: string
  proTips?: string
  safetyWarning?: string
  commonMistakes?: string
  estimatedTime: number // in minutes
}

export interface Project {
  id: string
  name: string
  category: string
  description: string
  difficulty: SkillLevel
  materials: Material[]
  tools: Tool[]
  steps: Step[]
  baseCost: { min: number; max: number }
  baseTime: number // in hours
  costPerSqFt?: number
  safetyEquipment?: string[]
  permitRequired?: boolean
  seasonalConsiderations?: string
}

export const projects: Project[] = [
  {
    id: "painting-room",
    name: "Interior Room Painting",
    category: "Painting",
    description: "Transform your room with a professional-quality paint finish",
    difficulty: "beginner",
    baseCost: { min: 80, max: 250 },
    baseTime: 6,
    costPerSqFt: 0.5,
    safetyEquipment: ["Safety glasses", "Dust mask", "Gloves"],
    materials: [
      {
        id: "paint",
        name: "Premium Interior Paint (1 Gallon)",
        description: "Low-VOC latex paint with primer, covers ~400 sq ft per gallon",
        specifications: "Eggshell or satin finish recommended for living areas, semi-gloss for kitchens/bathrooms",
        estimatedCost: 45,
        affiliateLink: "https://amazon.com/paint",
      },
      {
        id: "primer",
        name: "Stain-Blocking Primer (1 Gallon)",
        description: "High-hide primer for covering dark colors and stains",
        specifications: "Essential for new drywall, repairs, or dramatic color changes",
        estimatedCost: 30,
        affiliateLink: "https://amazon.com/primer",
      },
      {
        id: "painters-tape",
        name: "Professional Painter's Tape (2-Pack)",
        description: "Multi-surface blue tape for ultra-clean lines",
        specifications: "1.5-inch width, 14-day clean removal",
        estimatedCost: 15,
        affiliateLink: "https://amazon.com/tape",
      },
      {
        id: "drop-cloth",
        name: "Canvas Drop Cloth (9x12 ft)",
        description: "Heavy-duty reusable protection for floors",
        specifications: "Canvas absorbs spills better than plastic",
        estimatedCost: 18,
        affiliateLink: "https://amazon.com/drop-cloth",
      },
      {
        id: "spackle",
        name: "Lightweight Spackling Paste",
        description: "Fast-drying compound for filling nail holes and cracks",
        estimatedCost: 8,
        affiliateLink: "https://amazon.com/spackle",
      },
      {
        id: "sandpaper",
        name: "Sanding Sponge Set",
        description: "Fine and medium grit for smoothing repairs",
        estimatedCost: 12,
        affiliateLink: "https://amazon.com/sandpaper",
      },
      {
        id: "caulk",
        name: "Paintable Acrylic Caulk",
        description: "Seal gaps between trim and walls for professional finish",
        estimatedCost: 6,
        affiliateLink: "https://amazon.com/caulk",
        optional: true,
      },
    ],
    tools: [
      {
        id: "roller-frame",
        name: "Professional Roller Frame & Covers",
        description: "9-inch roller frame with 3/8-inch nap covers for smooth walls",
        affiliateLink: "https://amazon.com/roller",
      },
      {
        id: "extension-pole",
        name: "Telescoping Extension Pole",
        description: "4-8 foot adjustable pole for ceilings and high walls",
        affiliateLink: "https://amazon.com/extension-pole",
      },
      {
        id: "brushes",
        name: "Premium Angled Brush Set",
        description: "2-inch and 3-inch angled brushes for cutting in",
        affiliateLink: "https://amazon.com/brushes",
      },
      {
        id: "paint-tray",
        name: "Deep-Well Paint Tray with Liners",
        description: "Professional tray with disposable liners for easy cleanup",
        affiliateLink: "https://amazon.com/paint-tray",
      },
      {
        id: "ladder",
        name: "6-Foot Step Ladder",
        description: "Type II rated ladder for ceiling and upper wall work",
        affiliateLink: "https://amazon.com/ladder",
      },
      {
        id: "putty-knife",
        name: "Flexible Putty Knife Set",
        description: "2-inch and 4-inch knives for spackling",
        affiliateLink: "https://amazon.com/putty-knife",
      },
      {
        id: "caulk-gun",
        name: "Smooth Rod Caulk Gun",
        description: "For applying caulk to trim gaps",
        affiliateLink: "https://amazon.com/caulk-gun",
        optional: true,
      },
    ],
    steps: [
      {
        id: "prep-room",
        title: "Prepare the Room",
        description:
          "Remove all furniture or move to center and cover. Remove outlet covers, switch plates, and wall decorations. Clean walls with TSP cleaner or mild detergent to remove dirt, grease, and cobwebs. Allow to dry completely.",
        beginnerTips:
          "Label outlet covers with painter's tape showing their location - makes reinstallation easier. Take photos of the room before starting.",
        proTips:
          "Use a shop vacuum with brush attachment to remove dust from corners and baseboards before washing walls.",
        safetyWarning: "Turn off power to outlets at breaker box before removing covers. Test with voltage tester.",
        commonMistakes: "Skipping wall cleaning leads to poor paint adhesion and visible dirt under new paint.",
        estimatedTime: 45,
      },
      {
        id: "repair-walls",
        title: "Repair Wall Imperfections",
        description:
          "Fill all nail holes, dents, and cracks with spackling compound using putty knife. Apply in thin layers, slightly overfilling. Let dry 2-4 hours. Sand smooth with fine-grit sanding sponge until flush with wall. Wipe away dust with damp cloth.",
        beginnerTips:
          "Apply spackle in thin coats - thick applications crack as they dry. Sand in circular motions for smoothest finish.",
        proTips:
          "For larger holes (>1 inch), use mesh tape and joint compound. Apply 2-3 thin coats, feathering edges 6 inches beyond repair.",
        commonMistakes:
          "Not sanding repairs smooth creates visible bumps under paint. Always prime repaired areas separately.",
        estimatedTime: 60,
      },
      {
        id: "tape-protect",
        title: "Apply Painter's Tape & Protection",
        description:
          "Apply painter's tape to all trim, baseboards, door frames, and ceiling edges. Press firmly with putty knife for tight seal. Lay drop cloths over floors, taping edges to baseboards. Cover remaining furniture with plastic sheeting.",
        beginnerTips:
          "Apply tape to clean, dry surfaces only. Press down the edge closest to where you'll paint for cleanest lines.",
        proTips:
          "For textured walls, run a thin bead of clear caulk along tape edge, smooth with finger, let dry 30 minutes. Creates perfect seal preventing bleed-through.",
        safetyWarning: "Secure drop cloths to prevent tripping hazards. Keep walkways clear.",
        commonMistakes: "Leaving tape on too long (>7 days) makes removal difficult and can pull off paint.",
        estimatedTime: 45,
      },
      {
        id: "prime-walls",
        title: "Apply Primer Coat",
        description:
          "Stir primer thoroughly. Cut in edges with brush - paint 2-3 inch border around all trim, corners, and ceiling. Then roll walls using W-pattern: roll up, down, then side to side without lifting roller. Maintain wet edge to avoid lap marks. Let dry 4 hours minimum.",
        beginnerTips:
          "Don't skip primer! It seals repairs, blocks stains, and helps paint adhere. One gallon covers ~400 sq ft.",
        proTips:
          "Back-roll after cutting in while edge is still wet - eliminates brush marks and ensures uniform texture. Use same nap roller as final paint.",
        safetyWarning: "Ensure adequate ventilation. Open windows and use fans. Wear dust mask if sensitive to fumes.",
        commonMistakes:
          "Rolling too fast creates splatter. Use steady, moderate pressure and speed. Don't press hard - let roller do the work.",
        estimatedTime: 120,
      },
      {
        id: "first-coat",
        title: "Paint First Coat",
        description:
          "Stir paint thoroughly (don't shake - creates bubbles). Cut in all edges with brush using same technique as primer. Roll walls immediately after cutting in each section to blend. Use W or M pattern, then fill in without lifting roller. Work in 4x4 foot sections. Let dry 4-6 hours.",
        beginnerTips:
          "Load roller evenly - roll in tray until paint stops dripping. Multiple thin coats beat one thick coat every time.",
        proTips:
          "Maintain consistent roller pressure and speed for uniform finish. Overlap each pass by 50%. Keep wet edge to prevent lap marks - work quickly but carefully.",
        commonMistakes:
          "Overworking paint causes roller marks. Once area is covered, move on. Don't go back over drying paint.",
        estimatedTime: 120,
      },
      {
        id: "second-coat",
        title: "Apply Second Coat",
        description:
          "Inspect first coat for missed spots or thin areas. Lightly sand any drips or bumps with fine sandpaper. Apply second coat using identical technique. This coat provides full coverage, rich color, and durability. Check coverage in different lighting angles.",
        beginnerTips:
          "Second coat goes on easier and faster than first. Look for holidays (missed spots) before first coat fully dries.",
        proTips:
          "For deep colors, third coat may be needed. Wait 24 hours between second and third coats for best results.",
        commonMistakes:
          "Applying second coat too soon causes first coat to lift. Wait full dry time even if surface feels dry.",
        estimatedTime: 100,
      },
      {
        id: "remove-tape",
        title: "Remove Tape & Touch Up",
        description:
          "Remove painter's tape while final coat is still slightly tacky (1-2 hours after painting). Pull at 45-degree angle slowly and steadily. Touch up any bleed-through or missed spots with small brush. Reinstall outlet covers and switch plates after 24 hours.",
        beginnerTips: "If paint is too dry, score tape edge with utility knife before removing to prevent peeling.",
        proTips:
          "For perfect lines, remove tape when paint is 80% dry - tacky but not wet. This prevents both peeling and tearing.",
        commonMistakes:
          "Waiting until paint fully cures to remove tape often results in peeling. Remove within 24 hours of final coat.",
        estimatedTime: 30,
      },
      {
        id: "cleanup-cure",
        title: "Clean Up & Cure",
        description:
          "Clean brushes and rollers immediately with warm soapy water until water runs clear. Wrap in paper towels and hang to dry. Dispose of paint-soaked materials properly. Allow walls to cure 7 days before washing or hanging items. Avoid touching walls during cure time.",
        beginnerTips:
          "Store leftover paint in airtight container with date and room name. Touch-ups will be needed eventually.",
        proTips:
          "Clean roller covers by running under water while spinning - removes paint from deep in nap. Dry standing on end.",
        safetyWarning:
          "Never pour paint down drains. Dispose of latex paint by drying out and throwing in trash, or take to hazardous waste facility.",
        estimatedTime: 45,
      },
    ],
  },
  {
    id: "floating-shelves",
    name: "Install Floating Shelves",
    category: "Carpentry",
    description: "Add stylish, sturdy storage with professionally installed floating shelves",
    difficulty: "intermediate",
    baseCost: { min: 60, max: 180 },
    baseTime: 3,
    safetyEquipment: ["Safety glasses", "Dust mask", "Work gloves"],
    permitRequired: false,
    materials: [
      {
        id: "shelves",
        name: "Solid Wood Floating Shelf (Set of 2)",
        description: "Real wood shelves with concealed mounting system",
        specifications: "24-48 inch lengths, 1.5-2 inch thick, weight capacity 50-75 lbs per shelf",
        estimatedCost: 75,
        affiliateLink: "https://amazon.com/shelves",
      },
      {
        id: "wall-anchors",
        name: "Heavy-Duty Toggle Bolts",
        description: "Metal toggle anchors for drywall, rated 100+ lbs",
        specifications: "1/4 inch diameter, includes bolts",
        estimatedCost: 15,
        affiliateLink: "https://amazon.com/anchors",
      },
      {
        id: "lag-screws",
        name: "Lag Screws with Washers",
        description: "For mounting into wall studs",
        specifications: "1/4 x 3 inch, hex head",
        estimatedCost: 12,
        affiliateLink: "https://amazon.com/lag-screws",
      },
      {
        id: "wood-glue",
        name: "Wood Glue",
        description: "For securing shelf to mounting bracket",
        estimatedCost: 8,
        affiliateLink: "https://amazon.com/wood-glue",
        optional: true,
      },
    ],
    tools: [
      {
        id: "drill",
        name: "Cordless Drill/Driver Kit",
        description: "18V drill with drill and driver bits",
        affiliateLink: "https://amazon.com/drill",
      },
      {
        id: "drill-bits",
        name: "Masonry & Wood Drill Bit Set",
        description: "Includes 1/4 inch bits for pilot holes",
        affiliateLink: "https://amazon.com/drill-bits",
      },
      {
        id: "level",
        name: "24-inch Box Level",
        description: "Magnetic level with multiple vials",
        affiliateLink: "https://amazon.com/level",
      },
      {
        id: "stud-finder",
        name: "Electronic Stud Finder",
        description: "Edge-finding stud detector with AC wire warning",
        affiliateLink: "https://amazon.com/stud-finder",
      },
      {
        id: "tape-measure",
        name: "25-Foot Tape Measure",
        description: "Wide blade with lock",
        affiliateLink: "https://amazon.com/tape-measure",
      },
      {
        id: "socket-wrench",
        name: "Socket Wrench Set",
        description: "For tightening lag screws",
        affiliateLink: "https://amazon.com/socket-wrench",
      },
      {
        id: "pencil",
        name: "Carpenter Pencil & Sharpener",
        description: "For marking precise drill points",
        affiliateLink: "https://amazon.com/pencil",
      },
    ],
    steps: [
      {
        id: "plan-layout",
        title: "Plan Shelf Layout & Height",
        description:
          "Measure and mark desired shelf height on wall. Standard heights: 12-18 inches above counters, 48-60 inches for decorative shelves. Use tape measure to mark multiple points at same height. Check that area is clear of electrical wires and plumbing.",
        beginnerTips:
          "Consider what you'll store - leave adequate clearance above shelf. Measure from floor, not ceiling, as floors are more level.",
        proTips:
          "Use laser level for perfect horizontal lines across long spans. Mark stud locations at desired height before finalizing position.",
        safetyWarning:
          "Use stud finder's AC detection mode to locate electrical wires. Never drill into wires or pipes.",
        commonMistakes:
          "Not accounting for baseboard or crown molding when measuring from floor/ceiling. Always measure to actual wall surface.",
        estimatedTime: 30,
      },
      {
        id: "locate-studs",
        title: "Locate & Mark Wall Studs",
        description:
          "Use electronic stud finder to locate studs along shelf line. Mark both edges of each stud, then mark center. Studs are typically 16 inches on-center. Verify by drilling small test hole. Mark stud centers with vertical pencil line.",
        beginnerTips:
          "Studs provide strongest support - always mount into studs when possible. If no studs available, use heavy-duty toggle bolts rated for your shelf weight plus 50%.",
        proTips:
          "Knock test: studs sound solid, hollow areas sound empty. Confirm stud finder readings by checking 12 inches above and below - studs run floor to ceiling.",
        commonMistakes:
          "Confusing stud edge with center. Mark both edges, then measure to find true center. Stud finders can give false positives near electrical boxes.",
        estimatedTime: 20,
      },
      {
        id: "mount-bracket",
        title: "Install Mounting Bracket",
        description:
          "Hold mounting bracket at marked height, ensuring it's level. Mark drill holes through bracket. Drill pilot holes: 3/16 inch for studs, 1/2 inch for toggle bolts. For studs, drive lag screws with socket wrench. For drywall, insert toggle bolts and tighten until snug. Don't overtighten.",
        beginnerTips:
          "Start all screws by hand first, then tighten with tools. This prevents cross-threading and ensures straight installation.",
        proTips:
          "For maximum strength, mount bracket so at least 2 screws hit studs. Use toggle bolts for remaining holes. Apply thread-locking compound to prevent loosening over time.",
        safetyWarning:
          "Wear safety glasses when drilling overhead. Debris falls into eyes easily. Use dust mask when drilling drywall.",
        commonMistakes:
          "Overtightening drywall anchors strips threads and reduces holding power. Tighten until snug, then 1/4 turn more.",
        estimatedTime: 40,
      },
      {
        id: "prepare-shelf",
        title: "Prepare Shelf for Mounting",
        description:
          "If shelf has hollow channel for bracket, test-fit bracket into shelf. Channel should be snug but not too tight. Sand interior if needed. Apply thin bead of wood glue inside channel for permanent installation (optional but recommended for heavy loads).",
        beginnerTips:
          "Dry-fit everything before applying glue. Once glue is applied, you have limited time to adjust position.",
        proTips:
          "For extra security on heavy-duty shelves, drill pilot holes through shelf bottom into bracket and add screws from underneath. Countersink screws and fill with wood putty.",
        commonMistakes:
          "Forcing shelf onto bracket can crack wood. If too tight, sand bracket or shelf channel slightly. If too loose, add shims.",
        estimatedTime: 15,
      },
      {
        id: "install-shelf",
        title: "Mount Shelf to Bracket",
        description:
          "Slide shelf onto mounted bracket, ensuring it's fully seated. Check that shelf is level front-to-back and side-to-side. If using glue, clamp or weight shelf for 24 hours. For immediate use, secure with screws from below if bracket design allows.",
        beginnerTips:
          "Have helper support shelf while you check level and alignment. Easier than trying to hold and level simultaneously.",
        proTips:
          "For floating appearance, ensure shelf sits tight against wall with no gap. Use shims behind bracket if needed to bring shelf flush to wall.",
        commonMistakes:
          "Not checking level after mounting shelf. Bracket may be level, but shelf can still tilt if not properly seated.",
        estimatedTime: 20,
      },
      {
        id: "load-test",
        title: "Load Test & Final Adjustments",
        description:
          "Gradually add weight to shelf, starting at 25% of intended load. Check for sagging, pulling away from wall, or bracket movement. Increase to 50%, then 75%, then full load. Make any necessary adjustments. Touch up paint or caulk gaps if desired.",
        beginnerTips:
          "Don't exceed manufacturer's weight rating. Distribute weight evenly across shelf length. Heavier items should be closer to wall.",
        proTips:
          "For shelves holding valuable items, install earthquake putty under objects or add a small lip to front edge to prevent items sliding off.",
        safetyWarning:
          "Never overload shelves. Weight ratings assume even distribution. Concentrated weight at front edge can cause failure.",
        commonMistakes:
          "Loading shelf immediately after installation. Wait 24 hours if using adhesive. Even mechanical fasteners benefit from settling time.",
        estimatedTime: 15,
      },
    ],
  },
  {
    id: "cabinet-installation",
    name: "Kitchen Cabinet Installation",
    category: "Carpentry",
    description: "Professional kitchen cabinet installation with precise leveling and alignment",
    difficulty: "pro",
    baseCost: { min: 2000, max: 8000 },
    baseTime: 24,
    safetyEquipment: ["Safety glasses", "Work gloves", "Knee pads", "Dust mask"],
    permitRequired: true,
    materials: [
      {
        id: "cabinets",
        name: "Kitchen Cabinet Set",
        description: "Base and wall cabinets with hardware",
        specifications: "RTA or pre-assembled, includes mounting rails",
        estimatedCost: 3500,
        affiliateLink: "https://amazon.com/cabinets",
      },
      {
        id: "shims",
        name: "Composite Shim Pack (100pc)",
        description: "For leveling cabinets on uneven floors",
        estimatedCost: 15,
        affiliateLink: "https://amazon.com/shims",
      },
      {
        id: "cabinet-screws",
        name: "Cabinet Mounting Screws",
        description: "2.5-inch and 3-inch screws for studs",
        estimatedCost: 20,
        affiliateLink: "https://amazon.com/cabinet-screws",
      },
      {
        id: "ledger-board",
        name: "Ledger Board (1x3 lumber)",
        description: "Temporary support for wall cabinets",
        estimatedCost: 12,
        affiliateLink: "https://amazon.com/ledger",
      },
      {
        id: "wood-filler",
        name: "Wood Filler & Putty",
        description: "For filling screw holes and gaps",
        estimatedCost: 10,
        affiliateLink: "https://amazon.com/wood-filler",
      },
    ],
    tools: [
      {
        id: "laser-level",
        name: "Self-Leveling Laser Level",
        description: "Projects horizontal and vertical lines",
        affiliateLink: "https://amazon.com/laser-level",
      },
      {
        id: "impact-driver",
        name: "Impact Driver Kit",
        description: "For driving cabinet screws into studs",
        affiliateLink: "https://amazon.com/impact-driver",
      },
      {
        id: "cabinet-jacks",
        name: "Cabinet Lift Jack (Pair)",
        description: "Adjustable supports for wall cabinets",
        affiliateLink: "https://amazon.com/cabinet-jacks",
      },
      {
        id: "clamps",
        name: "Bar Clamps (4-pack)",
        description: "For holding cabinets together during installation",
        affiliateLink: "https://amazon.com/clamps",
      },
      {
        id: "stud-finder",
        name: "Professional Stud Finder",
        description: "Deep-scan model for finding studs behind drywall",
        affiliateLink: "https://amazon.com/stud-finder",
      },
    ],
    steps: [
      {
        id: "measure-layout",
        title: "Measure & Plan Cabinet Layout",
        description:
          "Measure room dimensions precisely. Locate and mark all wall studs. Find high point of floor using level. Mark wall cabinet height (typically 54 inches from floor to bottom of cabinet). Create detailed layout plan showing cabinet positions.",
        proTips:
          "Account for appliance dimensions, electrical outlets, and plumbing. Leave 1-inch clearance around appliances for ventilation.",
        safetyWarning:
          "Turn off power to kitchen circuits at breaker box. Verify with voltage tester before working near outlets.",
        estimatedTime: 120,
      },
      {
        id: "install-ledger",
        title: "Install Ledger Board",
        description:
          "Attach temporary ledger board to wall at marked height using level. Screw into studs every 16 inches. This supports wall cabinets during installation. Ensure ledger is perfectly level - this determines cabinet alignment.",
        proTips:
          "Use laser level to mark ledger line around entire room. Ensures all cabinets align perfectly even on long runs.",
        estimatedTime: 45,
      },
      {
        id: "hang-wall-cabinets",
        title: "Install Wall Cabinets",
        description:
          "Start with corner cabinet. Rest on ledger board and use cabinet jacks for support. Drill pilot holes through cabinet back into studs. Drive 3-inch screws through mounting rail. Check level and plumb. Clamp adjacent cabinets together, align faces, then screw together. Continue across wall.",
        proTips:
          "Install wall cabinets before base cabinets - easier access and no risk of damaging base cabinets. Use shims behind cabinets to bring flush to wall if needed.",
        safetyWarning:
          "Wall cabinets are heavy. Always use two people or cabinet jacks. Never work under unsecured cabinet.",
        commonMistakes: "Not checking plumb and level at each cabinet. Small errors compound across multiple cabinets.",
        estimatedTime: 480,
      },
      {
        id: "install-base-cabinets",
        title: "Install Base Cabinets",
        description:
          "Start at high point of floor. Set first cabinet, check level in all directions. Use shims under cabinet to level. Clamp to adjacent cabinet, align faces and tops perfectly. Screw cabinets together through sides. Secure to wall studs through back rail.",
        proTips:
          "Scribe and cut cabinet sides to fit against uneven walls. Use belt sander for precise fitting. All cabinet tops must be perfectly level for countertop installation.",
        commonMistakes:
          "Shimming only front or back creates rocking cabinet. Shim all four corners as needed for stability.",
        estimatedTime: 420,
      },
      {
        id: "install-hardware",
        title: "Install Doors, Drawers & Hardware",
        description:
          "Attach hinges to cabinet boxes. Hang doors and adjust for even gaps (typically 1/8 inch). Install drawer slides and test operation. Mount handles and knobs using template for consistent placement. Adjust doors until all gaps are uniform.",
        proTips:
          "Create cardboard template for hardware placement. Ensures all handles are exactly same height and distance from edge.",
        estimatedTime: 300,
      },
      {
        id: "final-adjustments",
        title: "Final Leveling & Touch-ups",
        description:
          "Make final adjustments to all doors and drawers. Fill screw holes with wood filler. Touch up any scratches. Remove ledger board. Caulk gap between cabinets and wall with paintable caulk. Clean all surfaces.",
        proTips:
          "Let cabinets settle for 24 hours before final adjustments. Wood expands/contracts with humidity changes.",
        estimatedTime: 180,
      },
    ],
  },
  {
    id: "tile-backsplash",
    name: "Install Tile Backsplash",
    category: "Tiling",
    description: "Create a stunning kitchen or bathroom backsplash with professional tile installation",
    difficulty: "intermediate",
    baseCost: { min: 200, max: 600 },
    baseTime: 8,
    costPerSqFt: 8,
    safetyEquipment: ["Safety glasses", "Dust mask", "Rubber gloves", "Knee pads"],
    materials: [
      {
        id: "tiles",
        name: "Ceramic or Glass Tile",
        description: "Backsplash tiles with spacers",
        specifications: "Typically 3x6 subway tile or mosaic sheets, add 10% for waste",
        estimatedCost: 180,
        affiliateLink: "https://amazon.com/tiles",
      },
      {
        id: "thinset",
        name: "White Thinset Mortar",
        description: "Modified thinset for wall tile",
        specifications: "25 lb bag covers ~95 sq ft with 1/4-inch trowel",
        estimatedCost: 25,
        affiliateLink: "https://amazon.com/thinset",
      },
      {
        id: "grout",
        name: "Unsanded Grout",
        description: "For grout lines less than 1/8 inch",
        specifications: "Choose color to complement tile",
        estimatedCost: 18,
        affiliateLink: "https://amazon.com/grout",
      },
      {
        id: "grout-sealer",
        name: "Penetrating Grout Sealer",
        description: "Protects grout from stains and moisture",
        estimatedCost: 15,
        affiliateLink: "https://amazon.com/grout-sealer",
      },
      {
        id: "tile-spacers",
        name: "Tile Spacers (1/16 inch)",
        description: "For consistent grout lines",
        estimatedCost: 8,
        affiliateLink: "https://amazon.com/spacers",
      },
    ],
    tools: [
      {
        id: "tile-cutter",
        name: "Manual Tile Cutter",
        description: "For straight cuts up to 24 inches",
        affiliateLink: "https://amazon.com/tile-cutter",
      },
      {
        id: "wet-saw",
        name: "Wet Tile Saw",
        description: "For precise cuts and angles",
        affiliateLink: "https://amazon.com/wet-saw",
        optional: true,
      },
      {
        id: "notched-trowel",
        name: "1/4-inch Square-Notch Trowel",
        description: "For spreading thinset evenly",
        affiliateLink: "https://amazon.com/trowel",
      },
      {
        id: "grout-float",
        name: "Rubber Grout Float",
        description: "For applying and smoothing grout",
        affiliateLink: "https://amazon.com/grout-float",
      },
      {
        id: "tile-nippers",
        name: "Tile Nippers",
        description: "For small cuts and curves around outlets",
        affiliateLink: "https://amazon.com/nippers",
      },
      {
        id: "mixing-drill",
        name: "Mixing Paddle & Drill",
        description: "For mixing thinset and grout",
        affiliateLink: "https://amazon.com/mixing-paddle",
      },
      {
        id: "sponges",
        name: "Large Grout Sponges (3-pack)",
        description: "For cleaning excess grout",
        affiliateLink: "https://amazon.com/sponges",
      },
    ],
    steps: [
      {
        id: "prep-surface",
        title: "Prepare Wall Surface",
        description:
          "Clean wall thoroughly with TSP cleaner. Remove any grease, especially behind stove. Sand glossy paint lightly for better adhesion. Fill any holes or dents. Mark centerline and layout lines using level. Plan tile layout to avoid small cuts at edges.",
        beginnerTips:
          "Dry-lay tiles on counter first to visualize pattern and plan cuts. Start with full tiles in most visible areas.",
        proTips:
          "For subway tile, offset each row by half tile length (running bond pattern). Use laser level to mark perfectly straight reference lines.",
        safetyWarning: "Turn off power to outlets. Remove outlet covers. Tile will be installed around outlet boxes.",
        commonMistakes:
          "Not planning layout results in awkward small cuts in visible corners. Always start from center and work outward.",
        estimatedTime: 60,
      },
      {
        id: "mix-apply-thinset",
        title: "Mix & Apply Thinset",
        description:
          "Mix thinset to peanut butter consistency following package directions. Let slake 10 minutes, then remix. Apply to small section (3x3 feet) using flat side of trowel, then comb with notched side at 45-degree angle. Create uniform ridges.",
        beginnerTips:
          "Only spread as much thinset as you can tile in 15 minutes. It skins over and loses adhesion quickly.",
        proTips:
          "Back-butter large tiles (over 8x8 inches) with thin layer of thinset for 100% coverage. Prevents hollow spots that crack under pressure.",
        safetyWarning:
          "Thinset is caustic. Wear rubber gloves and avoid skin contact. Wash immediately if contact occurs.",
        commonMistakes:
          "Trowel ridges in wrong direction don't collapse properly. Always comb perpendicular to tile length for best adhesion.",
        estimatedTime: 30,
      },
      {
        id: "set-tiles",
        title: "Set Tiles",
        description:
          "Press first tile into thinset with slight twisting motion. Insert spacers at corners. Continue setting tiles, checking level frequently. Use spacers consistently for uniform grout lines. Wipe excess thinset from tile faces immediately. Work in small sections.",
        beginnerTips:
          "Press tiles firmly but don't slide them around - this removes thinset from back. Slight twist helps achieve good contact.",
        proTips:
          "Periodically pull up a tile to check thinset coverage. Should cover 95% of tile back. Adjust trowel angle or add more thinset if needed.",
        commonMistakes:
          "Not removing spacers before thinset dries makes them permanent. Remove spacers after 30-60 minutes while thinset is still workable.",
        estimatedTime: 240,
      },
      {
        id: "cut-tiles",
        title: "Cut Tiles for Edges & Outlets",
        description:
          "Measure and mark tiles for cuts. Use tile cutter for straight cuts - score once firmly, then snap. Use wet saw for L-cuts around outlets. Use nippers for small notches. Smooth cut edges with rubbing stone. Test fit before setting.",
        beginnerTips:
          "Measure twice, cut once. Add 1/8 inch to measurements for grout line spacing. Mark cut line on tile face with pencil.",
        proTips:
          "For outlet cuts, make relief cuts with wet saw first, then nibble out waste. Creates cleaner edges than trying to cut entire opening at once.",
        safetyWarning:
          "Wet saw creates slurry - wear safety glasses and work in well-ventilated area. Keep hands away from blade.",
        estimatedTime: 90,
      },
      {
        id: "grout-tiles",
        title: "Apply Grout",
        description:
          "Wait 24 hours for thinset to cure. Mix grout to toothpaste consistency. Apply diagonally across tiles using grout float, forcing into joints. Hold float at 45-degree angle. Remove excess by scraping diagonally. Wait 15-20 minutes until grout hazes over.",
        beginnerTips:
          "Work in small sections (4x4 feet). Grout sets up quickly, especially in warm weather. Keep grout joints completely filled.",
        proTips:
          "For consistent color, mix entire project's grout at once. Mixing separate batches can result in slight color variations.",
        commonMistakes:
          "Waiting too long to clean grout makes it extremely difficult to remove. Clean while still slightly soft but not wet.",
        estimatedTime: 90,
      },
      {
        id: "clean-seal",
        title: "Clean & Seal Grout",
        description:
          "Wipe tiles with damp sponge in circular motion, rinsing sponge frequently. Don't press hard or you'll remove grout from joints. Let dry, then buff haze with dry cloth. Wait 72 hours, then apply grout sealer with small brush or applicator. Wipe excess from tile faces.",
        beginnerTips:
          "Change sponge water frequently - dirty water leaves residue. May need to clean tiles 3-4 times as grout continues to haze.",
        proTips:
          "Apply sealer in thin coats. Two thin coats provide better protection than one thick coat. Reapply sealer annually in high-moisture areas.",
        safetyWarning: "Ensure good ventilation when applying sealer. Fumes can be strong in enclosed spaces.",
        estimatedTime: 60,
      },
    ],
  },
  {
    id: "garden-decking",
    name: "Build Garden Decking",
    category: "Outdoor",
    description: "Create an outdoor living space with professional-grade decking",
    difficulty: "pro",
    baseCost: { min: 1200, max: 4000 },
    baseTime: 24,
    costPerSqFt: 18,
    safetyEquipment: ["Safety glasses", "Work gloves", "Hearing protection", "Steel-toe boots"],
    permitRequired: true,
    seasonalConsiderations: "Best built in dry weather, spring through fall. Avoid winter installation.",
    materials: [
      {
        id: "deck-boards",
        name: "Composite Deck Boards",
        description: "Low-maintenance composite decking",
        specifications: "Grooved edge boards, 12-16 ft lengths, add 10% for waste",
        estimatedCost: 1800,
        affiliateLink: "https://amazon.com/deck-boards",
      },
      {
        id: "joists",
        name: "Pressure-Treated Joists (2x8)",
        description: "Ground-contact rated lumber for frame",
        specifications: "16-inch on-center spacing typical",
        estimatedCost: 450,
        affiliateLink: "https://amazon.com/joists",
      },
      {
        id: "posts",
        name: "Pressure-Treated Posts (6x6)",
        description: "For deck support structure",
        specifications: "Ground-contact rated, length depends on height",
        estimatedCost: 280,
        affiliateLink: "https://amazon.com/posts",
      },
      {
        id: "concrete",
        name: "Concrete Mix (80lb bags)",
        description: "For post footings",
        specifications: "Fast-setting concrete, 2-3 bags per post",
        estimatedCost: 180,
        affiliateLink: "https://amazon.com/concrete",
      },
      {
        id: "joist-hangers",
        name: "Galvanized Joist Hangers",
        description: "For connecting joists to ledger and beams",
        specifications: "Sized for 2x8 joists",
        estimatedCost: 65,
        affiliateLink: "https://amazon.com/joist-hangers",
      },
      {
        id: "deck-screws",
        name: "Composite Deck Screws (5lb)",
        description: "Color-matched screws for composite decking",
        specifications: "Self-drilling, corrosion-resistant",
        estimatedCost: 55,
        affiliateLink: "https://amazon.com/deck-screws",
      },
      {
        id: "flashing",
        name: "Aluminum Flashing",
        description: "For protecting ledger board",
        specifications: "8-inch width, length of ledger",
        estimatedCost: 35,
        affiliateLink: "https://amazon.com/flashing",
      },
      {
        id: "post-bases",
        name: "Adjustable Post Bases",
        description: "Galvanized post anchors",
        estimatedCost: 80,
        affiliateLink: "https://amazon.com/post-bases",
      },
    ],
    tools: [
      {
        id: "circular-saw",
        name: "Circular Saw (7.25-inch)",
        description: "For cutting deck boards and framing",
        affiliateLink: "https://amazon.com/circular-saw",
      },
      {
        id: "miter-saw",
        name: "Compound Miter Saw",
        description: "For precise angle cuts",
        affiliateLink: "https://amazon.com/miter-saw",
        optional: true,
      },
      {
        id: "impact-driver",
        name: "Impact Driver Kit",
        description: "For driving deck screws efficiently",
        affiliateLink: "https://amazon.com/impact-driver",
      },
      {
        id: "post-hole-digger",
        name: "Manual Post Hole Digger",
        description: "For digging footing holes",
        affiliateLink: "https://amazon.com/post-digger",
      },
      {
        id: "auger",
        name: "Power Auger (Rental)",
        description: "Gas-powered auger for easier digging",
        affiliateLink: "https://amazon.com/auger",
        optional: true,
      },
      {
        id: "speed-square",
        name: "Rafter Square",
        description: "For marking square cuts",
        affiliateLink: "https://amazon.com/speed-square",
      },
      {
        id: "chalk-line",
        name: "Chalk Line",
        description: "For marking long straight lines",
        affiliateLink: "https://amazon.com/chalk-line",
      },
      {
        id: "framing-square",
        name: "Framing Square",
        description: "For checking frame squareness",
        affiliateLink: "https://amazon.com/framing-square",
      },
      {
        id: "water-level",
        name: "Water Level or Laser Level",
        description: "For leveling posts across distance",
        affiliateLink: "https://amazon.com/water-level",
      },
    ],
    steps: [
      {
        id: "design-permits",
        title: "Design Deck & Obtain Permits",
        description:
          "Create detailed deck plan including dimensions, post locations, and materials. Check local building codes for setback requirements, railing height, and footing depth. Submit plans and obtain building permit. Call utility company to mark underground lines.",
        proTips:
          "Most jurisdictions require decks over 30 inches high to have railings. Footings must extend below frost line (varies by region, typically 36-48 inches).",
        safetyWarning:
          "Always call 811 before digging. Underground utilities can be deadly. Wait for utility marking before starting excavation.",
        commonMistakes:
          "Skipping permit process leads to fines and potential deck removal. Permits ensure structural safety and protect property value.",
        estimatedTime: 240,
      },
      {
        id: "layout-footings",
        title: "Layout & Dig Footings",
        description:
          "Mark deck perimeter with stakes and string. Use 3-4-5 triangle method to ensure corners are square. Mark post locations (typically 6-8 feet apart). Dig holes to below frost line plus 6 inches for gravel base. Holes should be 3x post width (18 inches for 6x6 posts).",
        proTips:
          "Add 6 inches of gravel at bottom of each hole for drainage. Tamp firmly. This prevents frost heave and extends post life.",
        safetyWarning:
          "Watch for underground utilities. If you hit anything unexpected, stop immediately and call utility company.",
        commonMistakes:
          "Shallow footings heave in winter, causing deck to shift. Always dig below frost line for your region.",
        estimatedTime: 300,
      },
      {
        id: "set-posts",
        title: "Set Posts in Concrete",
        description:
          "Place post bases in holes. Mix concrete and pour around bases, leaving top 3 inches for soil. Set posts in bases temporarily. Use level and braces to plumb posts in both directions. Pour remaining concrete, sloping top away from post for drainage. Let cure 48 hours.",
        proTips:
          "Leave posts long - you'll cut to exact height after concrete cures. Easier than trying to set exact height in wet concrete.",
        safetyWarning:
          "Concrete is caustic. Wear gloves and eye protection. Avoid skin contact. Wash immediately if contact occurs.",
        commonMistakes:
          "Not bracing posts adequately while concrete cures results in leaning posts. Use diagonal braces in both directions.",
        estimatedTime: 240,
      },
      {
        id: "install-ledger",
        title: "Install Ledger Board",
        description:
          "Mark ledger height on house (typically 1 inch below interior floor for proper drainage). Install flashing above ledger line. Attach ledger to house rim joist using 1/2-inch lag screws every 16 inches, staggered top and bottom. Use washers. Ensure ledger is level and properly flashed.",
        proTips:
          "Never attach ledger to siding. Remove siding and attach directly to rim joist or studs. Improper ledger attachment is leading cause of deck collapse.",
        safetyWarning:
          "Ledger must support half the deck weight. Use proper fasteners into solid framing, not just siding. This is critical for safety.",
        commonMistakes:
          "Attaching ledger over siding traps moisture and provides inadequate support. Always remove siding first.",
        estimatedTime: 180,
      },
      {
        id: "cut-posts-beams",
        title: "Cut Posts & Install Beams",
        description:
          "Use water level or laser to mark all posts at same height. Cut posts to height. Install beam on top of posts using post caps or notched posts. Secure with through-bolts or structural screws. Beam should be level and properly supported at each post.",
        proTips:
          "For spans over 8 feet, use doubled 2x8 or 2x10 beams. Sandwich posts between beam boards for maximum strength.",
        commonMistakes:
          "Cutting posts before concrete fully cures can shift post position. Wait full 48 hours before cutting.",
        estimatedTime: 120,
      },
      {
        id: "install-joists",
        title: "Install Floor Joists",
        description:
          "Mark joist locations on ledger and beam (typically 16 inches on-center). Install joist hangers on ledger. Set joists in hangers and rest on beam. Secure with joist hanger nails (not screws). Install rim joist around perimeter. Add blocking between joists at mid-span for rigidity.",
        proTips:
          "Crown all joists (install with bow up). This compensates for settling and ensures flat deck surface. Mark crown with arrow before installing.",
        commonMistakes:
          "Using wrong fasteners in joist hangers reduces strength by 50%. Always use specified joist hanger nails, not screws or common nails.",
        estimatedTime: 300,
      },
      {
        id: "install-decking",
        title: "Install Deck Boards",
        description:
          "Start first board against house, leaving 1/4-inch gap for drainage. Secure with two screws per joist. Use spacers for consistent gaps (typically 1/8 inch for composite). Stagger board ends randomly for natural look. Cut boards to length as you go, letting ends overhang slightly. Trim all ends straight after installation.",
        proTips:
          "Pre-drill composite boards near ends to prevent splitting. Use color-matched screws for invisible fasteners. Consider hidden fastener systems for premium look.",
        safetyWarning:
          "Wear hearing protection when cutting composite - it's loud. Dust mask recommended as composite dust is irritating.",
        commonMistakes:
          "Butting boards tight together doesn't allow for expansion. Composite expands/contracts with temperature - leave proper gaps.",
        estimatedTime: 420,
      },
      {
        id: "stairs-railings",
        title: "Build Stairs & Install Railings",
        description:
          "Calculate stair rise and run (7-inch rise, 11-inch run typical). Cut stringers and attach to deck frame. Install treads. Build railing posts (maximum 6 feet apart), securing through rim joist with carriage bolts. Install top and bottom rails, then balusters (maximum 4-inch spacing). Add post caps.",
        proTips:
          "Stair stringers should rest on concrete pad, not soil. Pour small pad at base of stairs for longevity.",
        safetyWarning:
          "Railings are required by code for decks over 30 inches high. Balusters must be spaced so 4-inch sphere cannot pass through.",
        commonMistakes:
          "Inconsistent stair rise creates tripping hazard. All steps must be within 3/8 inch of same height.",
        estimatedTime: 360,
      },
      {
        id: "finishing",
        title: "Final Inspection & Finishing",
        description:
          "Inspect all connections and fasteners. Tighten any loose screws. Clean deck surface. Apply composite deck cleaner if needed. Schedule final building inspection. Add skirting around deck perimeter if desired. Install lighting for safety and ambiance.",
        proTips:
          "Take photos of framing before installing decking. Helpful for future repairs or modifications when you need to locate joists.",
        commonMistakes:
          "Skipping final inspection can result in fines and insurance issues. Always complete permit process with final inspection.",
        estimatedTime: 180,
      },
    ],
  },
  {
    id: "laminate-flooring",
    name: "Install Laminate Flooring",
    category: "Flooring",
    description: "Professional laminate floor installation with proper underlayment and transitions",
    difficulty: "intermediate",
    baseCost: { min: 400, max: 1200 },
    baseTime: 10,
    costPerSqFt: 4,
    safetyEquipment: ["Safety glasses", "Knee pads", "Dust mask", "Hearing protection"],
    materials: [
      {
        id: "laminate",
        name: "Click-Lock Laminate Flooring",
        description: "AC3 or AC4 rated laminate planks",
        specifications: "Add 10% for waste and future repairs",
        estimatedCost: 650,
        affiliateLink: "https://amazon.com/laminate",
      },
      {
        id: "underlayment",
        name: "Premium Foam Underlayment",
        description: "3mm foam with moisture barrier",
        specifications: "Reduces noise and provides cushioning",
        estimatedCost: 95,
        affiliateLink: "https://amazon.com/underlayment",
      },
      {
        id: "transition-strips",
        name: "Transition Molding Kit",
        description: "T-molding, reducers, and end caps",
        specifications: "Match flooring color",
        estimatedCost: 45,
        affiliateLink: "https://amazon.com/transitions",
      },
      {
        id: "quarter-round",
        name: "Quarter Round Molding",
        description: "For covering expansion gap at walls",
        specifications: "Paintable or pre-finished to match floor",
        estimatedCost: 35,
        affiliateLink: "https://amazon.com/quarter-round",
      },
      {
        id: "floor-patch",
        name: "Self-Leveling Floor Compound",
        description: "For leveling low spots in subfloor",
        estimatedCost: 30,
        affiliateLink: "https://amazon.com/floor-patch",
        optional: true,
      },
    ],
    tools: [
      {
        id: "jigsaw",
        name: "Jigsaw with Fine-Tooth Blade",
        description: "For cutting around door frames and obstacles",
        affiliateLink: "https://amazon.com/jigsaw",
      },
      {
        id: "circular-saw",
        name: "Circular Saw",
        description: "For straight cuts across planks",
        affiliateLink: "https://amazon.com/circular-saw",
      },
      {
        id: "installation-kit",
        name: "Laminate Installation Kit",
        description: "Includes tapping block, pull bar, and spacers",
        affiliateLink: "https://amazon.com/install-kit",
      },
      {
        id: "miter-saw",
        name: "Miter Saw",
        description: "For clean crosscuts on planks",
        affiliateLink: "https://amazon.com/miter-saw",
        optional: true,
      },
      {
        id: "oscillating-tool",
        name: "Oscillating Multi-Tool",
        description: "For undercutting door jambs",
        affiliateLink: "https://amazon.com/oscillating-tool",
      },
      {
        id: "utility-knife",
        name: "Heavy-Duty Utility Knife",
        description: "For cutting underlayment",
        affiliateLink: "https://amazon.com/utility-knife",
      },
      {
        id: "rubber-mallet",
        name: "Rubber Mallet",
        description: "For tapping planks together",
        affiliateLink: "https://amazon.com/mallet",
      },
    ],
    steps: [
      {
        id: "acclimate-flooring",
        title: "Acclimate Flooring",
        description:
          "Store unopened flooring boxes in installation room for 48 hours minimum. Room temperature should be 60-80°F with 35-65% humidity. This allows planks to adjust to room conditions, preventing expansion/contraction issues after installation.",
        beginnerTips:
          "Don't skip acclimation! Temperature and humidity changes cause laminate to expand and contract. Proper acclimation prevents buckling and gaps.",
        proTips:
          "Open a few boxes and check planks for defects during acclimation period. Easier to return defective material before installation starts.",
        commonMistakes:
          "Installing flooring immediately after delivery, especially in winter, leads to gaps as planks contract after installation.",
        estimatedTime: 30,
      },
      {
        id: "prep-subfloor",
        title: "Prepare Subfloor",
        description:
          "Remove all old flooring, carpet, and padding. Pull all staples and nails. Sweep and vacuum thoroughly. Check subfloor for level using 6-foot straightedge - variations over 3/16 inch per 10 feet must be corrected. Fill low spots with floor leveling compound. Secure any squeaky or loose boards.",
        beginnerTips:
          "Use floor scraper to remove old adhesive. Laminate won't lay flat over bumps or debris. A smooth, clean subfloor is essential.",
        proTips:
          "For concrete subfloors, perform moisture test. Tape plastic sheet to floor for 24 hours. If condensation forms underneath, moisture barrier is required.",
        safetyWarning:
          "Wear dust mask when removing old flooring. Old adhesives may contain asbestos. If concerned, have tested before disturbing.",
        commonMistakes:
          "Not addressing subfloor issues causes squeaks, movement, and premature wear. Fix all problems before installing flooring.",
        estimatedTime: 180,
      },
      {
        id: "undercut-doors",
        title: "Undercut Door Jambs",
        description:
          "Place scrap piece of flooring plus underlayment next to door jamb. Use oscillating tool to cut jamb horizontally at this height. This allows flooring to slide under jamb for professional look. Vacuum sawdust from cuts.",
        beginnerTips:
          "Practice on scrap wood first if new to oscillating tool. Keep blade flat against flooring sample for consistent height.",
        proTips:
          "Cut jambs slightly higher than flooring thickness (add 1/16 inch) to allow easy installation without forcing planks under jamb.",
        commonMistakes:
          "Cutting jambs too low creates gap. Cutting too high prevents flooring from sliding underneath. Use flooring sample as guide.",
        estimatedTime: 45,
      },
      {
        id: "install-underlayment",
        title: "Install Underlayment",
        description:
          "Roll out underlayment perpendicular to planned plank direction. Butt edges together without overlapping. Tape seams with moisture-resistant tape. Trim underlayment at walls. Underlayment should cover entire floor with no gaps or wrinkles.",
        beginnerTips:
          "Don't overlap underlayment - creates bumps that telegraph through flooring. Butt edges tightly and tape all seams.",
        proTips:
          "For concrete subfloors or basements, use underlayment with built-in moisture barrier. Overlap seams by 8 inches and tape thoroughly.",
        commonMistakes:
          "Wrinkled or bunched underlayment creates uneven floor surface. Pull tight and smooth as you roll out.",
        estimatedTime: 60,
      },
      {
        id: "plan-layout",
        title: "Plan Plank Layout",
        description:
          "Measure room width and calculate how many rows of planks fit. If last row will be less than 2 inches wide, rip first row narrower so first and last rows are similar width. Plan to stagger end joints by at least 12 inches between rows. Avoid H-patterns (joints aligning every other row).",
        beginnerTips:
          "Dry-lay first three rows without clicking together to visualize pattern and identify any problem planks before committing.",
        proTips:
          "For most natural look, randomly select planks from multiple boxes. This distributes color and pattern variations throughout floor.",
        commonMistakes:
          "Not planning layout results in narrow last row that's difficult to install and looks unprofessional. Always calculate first.",
        estimatedTime: 30,
      },
      {
        id: "first-rows",
        title: "Install First Three Rows",
        description:
          "Start in left corner of longest wall. Place 1/4-inch spacers against wall. Lay first plank with groove side toward wall. Click second plank into end of first at 45-degree angle, then lower flat. Continue first row to end, cutting last plank to fit (remember 1/4-inch gap). Start second row with cutoff from first row (if over 12 inches). Click long side into first row, then end joints.",
        beginnerTips:
          "First three rows establish pattern for entire floor. Take your time ensuring they're straight and properly clicked together.",
        proTips:
          "Use chalk line to mark guideline for first row. Walls are rarely straight - following wall creates crooked floor. Follow chalk line instead.",
        safetyWarning:
          "When cutting planks, wear safety glasses and hearing protection. Cut outside or in well-ventilated area - laminate dust is irritating.",
        commonMistakes:
          "Forcing planks together damages locking mechanism. Planks should click together easily at proper angle. If difficult, check for debris in groove.",
        estimatedTime: 90,
      },
      {
        id: "continue-installation",
        title: "Continue Installation",
        description:
          "Work row by row across room. Stagger end joints randomly, maintaining 12-inch minimum offset. Use tapping block and rubber mallet to close gaps between planks - never hit planks directly. Use pull bar for last plank in each row. Maintain 1/4-inch expansion gap at all walls and obstacles.",
        beginnerTips:
          "Save cutoff pieces - they often start next row, reducing waste. Pieces under 12 inches should not be used as row starters.",
        proTips:
          "Every few rows, measure distance to opposite wall at both ends. Ensures you're staying parallel. Adjust slightly if drifting off course.",
        commonMistakes:
          "Hitting planks directly with mallet damages edges. Always use tapping block to distribute force evenly.",
        estimatedTime: 360,
      },
      {
        id: "last-row-obstacles",
        title: "Install Last Row & Cut Around Obstacles",
        description:
          "Measure and rip last row to width, remembering 1/4-inch expansion gap. Use pull bar to click into place. For obstacles like pipes, measure carefully and drill hole 1/4 inch larger than pipe. Cut plank in half through hole center, install both pieces, glue cut back together. Cover with escutcheon plate.",
        beginnerTips:
          "Make cardboard template for complex cuts around door frames and obstacles. Transfer template to plank for accurate cutting.",
        proTips:
          "For toilet flanges, remove toilet before installing flooring. Install flooring under flange location, then reinstall toilet with new wax ring.",
        commonMistakes:
          "Cutting holes too tight around pipes prevents expansion. Always add 1/4 inch clearance around all obstacles.",
        estimatedTime: 120,
      },
      {
        id: "transitions-trim",
        title: "Install Transitions & Trim",
        description:
          "Remove spacers from walls. Install transition strips at doorways using track system or adhesive (follow manufacturer instructions). Install quarter-round or baseboards to cover expansion gap, nailing into wall studs, not floor. Caulk top edge of trim where it meets wall with paintable caulk.",
        beginnerTips:
          "Nail trim into wall, not floor. Floor needs to float freely. Nailing trim to floor prevents expansion and causes buckling.",
        proTips:
          "Use brad nailer for trim installation - faster and cleaner than hand nailing. Fill nail holes with wood filler matching trim color.",
        commonMistakes:
          "Installing trim too tight to floor prevents expansion. Leave 1/16-inch gap between trim and floor for movement.",
        estimatedTime: 90,
      },
      {
        id: "final-cleaning",
        title: "Final Cleaning & Inspection",
        description:
          "Vacuum entire floor thoroughly. Damp mop with laminate floor cleaner (never use wet mop or steam cleaner). Inspect all seams and transitions. Check that floor moves freely - stand on floor and shift weight to ensure it's not pinched anywhere. Wait 24 hours before moving furniture back.",
        beginnerTips:
          "Use furniture pads under all furniture legs to prevent scratching. Never drag furniture across laminate flooring.",
        proTips:
          "Keep extra box of flooring for future repairs. Laminate styles are discontinued frequently, making exact matches difficult years later.",
        commonMistakes:
          "Using too much water when cleaning damages laminate. Use damp mop only, and dry any standing water immediately.",
        estimatedTime: 45,
      },
    ],
  },
  {
    id: "leaky-faucet",
    name: "Fix Leaky Faucet",
    category: "Plumbing",
    description: "Repair dripping faucets and save water with professional plumbing techniques",
    difficulty: "beginner",
    baseCost: { min: 20, max: 60 },
    baseTime: 2,
    safetyEquipment: ["Safety glasses", "Rubber gloves"],
    materials: [
      {
        id: "repair-kit",
        name: "Universal Faucet Repair Kit",
        description: "Includes washers, O-rings, and seals for most faucets",
        specifications: "Contains multiple sizes for compatibility",
        estimatedCost: 18,
        affiliateLink: "https://amazon.com/repair-kit",
      },
      {
        id: "plumbers-grease",
        name: "Silicone Plumber's Grease",
        description: "Waterproof lubricant for O-rings and seals",
        estimatedCost: 9,
        affiliateLink: "https://amazon.com/grease",
      },
      {
        id: "teflon-tape",
        name: "Teflon Thread Seal Tape",
        description: "For sealing threaded connections",
        estimatedCost: 5,
        affiliateLink: "https://amazon.com/teflon-tape",
      },
      {
        id: "vinegar",
        name: "White Vinegar",
        description: "For cleaning mineral deposits",
        estimatedCost: 4,
        affiliateLink: "https://amazon.com/vinegar",
      },
    ],
    tools: [
      {
        id: "adjustable-wrench",
        name: "Adjustable Wrench Set",
        description: "6-inch and 10-inch wrenches",
        affiliateLink: "https://amazon.com/wrench",
      },
      {
        id: "screwdriver-set",
        name: "Precision Screwdriver Set",
        description: "Phillips and flathead in multiple sizes",
        affiliateLink: "https://amazon.com/screwdrivers",
      },
      {
        id: "allen-wrenches",
        name: "Hex Key Set",
        description: "For set screws on modern faucets",
        affiliateLink: "https://amazon.com/allen-wrenches",
      },
      {
        id: "flashlight",
        name: "LED Headlamp or Flashlight",
        description: "For seeing under sink and inside faucet",
        affiliateLink: "https://amazon.com/flashlight",
      },
      {
        id: "pliers",
        name: "Slip-Joint Pliers",
        description: "For gripping and turning parts",
        affiliateLink: "https://amazon.com/pliers",
      },
      {
        id: "bucket",
        name: "Small Bucket or Bowl",
        description: "For catching water when disassembling",
        affiliateLink: "https://amazon.com/bucket",
      },
    ],
    steps: [
      {
        id: "identify-type",
        title: "Identify Faucet Type",
        description:
          "Determine faucet type: compression (separate hot/cold handles with washers), cartridge (single or double handle), ball (single handle with ball bearing), or ceramic disk (single handle with ceramic cylinders). Take photos of faucet from all angles. Check under sink for brand name on supply lines or faucet body.",
        beginnerTips:
          "Most modern faucets are cartridge or ceramic disk types. Older faucets (pre-1990s) are usually compression type. Knowing type helps buy correct parts.",
        proTips:
          "Search faucet brand and model online for exploded diagram showing all parts. Makes disassembly and reassembly much easier.",
        commonMistakes: "Buying wrong repair kit wastes time and money. Identify faucet type before purchasing parts.",
        estimatedTime: 15,
      },
      {
        id: "shut-water",
        title: "Turn Off Water Supply",
        description:
          "Locate shut-off valves under sink - one for hot, one for cold. Turn clockwise to close. If no shut-off valves present, turn off main water supply. Open faucet to drain remaining water and relieve pressure. Place bucket under supply lines to catch any drips.",
        beginnerTips:
          "If shut-off valves are stuck or leaking, this is good time to replace them. Old valves often fail when operated after years of being open.",
        proTips:
          "Take this opportunity to inspect supply lines. If braided stainless lines are over 10 years old, consider replacing them preventatively.",
        safetyWarning:
          "If shut-off valves leak when closed, turn off main water supply instead. Don't force stuck valves - they can break off.",
        commonMistakes:
          "Not fully closing shut-off valves results in water spraying when faucet is disassembled. Turn until completely tight.",
        estimatedTime: 10,
      },
      {
        id: "disassemble-faucet",
        title: "Disassemble Faucet",
        description:
          "Remove handle: look for set screw under decorative cap or on handle underside. Use appropriate tool (hex key or screwdriver) to remove. Lift off handle. For compression faucets, use wrench to remove packing nut and stem. For cartridge faucets, remove retaining clip and pull out cartridge. Take photos at each step.",
        beginnerTips:
          "Place parts in order on towel as you remove them. Makes reassembly foolproof. Some handles are tight - wiggle while pulling up.",
        proTips:
          "If parts are stuck due to mineral buildup, soak in white vinegar for 30 minutes to dissolve deposits. Don't force - you'll break parts.",
        commonMistakes:
          "Losing small parts like clips and screws. Use magnetic parts tray or muffin tin to organize small components.",
        estimatedTime: 25,
      },
      {
        id: "inspect-clean",
        title: "Inspect & Clean Components",
        description:
          "Examine all parts for wear, cracks, or mineral buildup. Check O-rings for cracks or flattening. Inspect valve seat (inside faucet body) for pitting or roughness - this causes leaks even with new washers. Clean all parts with vinegar to remove mineral deposits. Use old toothbrush for scrubbing.",
        beginnerTips:
          "Bring old parts to hardware store to ensure exact replacement match. Even slight size differences prevent proper sealing.",
        proTips:
          "If valve seat is damaged, use valve seat wrench to remove and replace it. Damaged seats are common cause of persistent leaks after washer replacement.",
        commonMistakes:
          "Reusing old O-rings and washers. Always replace these inexpensive parts - they're the usual leak source.",
        estimatedTime: 20,
      },
      {
        id: "replace-parts",
        title: "Replace Washers, O-Rings & Seals",
        description:
          "Install new washer on stem (compression faucets) or new O-rings on cartridge. Apply thin coat of plumber's grease to all rubber parts - helps them slide into place and extends life. For cartridge faucets, install new cartridge in same orientation as old one (note hot/cold alignment). Replace all seals and springs.",
        beginnerTips:
          "Don't over-grease - thin coat is sufficient. Too much grease attracts dirt and can cause parts to slip.",
        proTips:
          "For compression faucets, slightly bevel new washer edge with utility knife for better seal against valve seat.",
        commonMistakes:
          "Installing cartridge backwards reverses hot and cold. Note orientation before removing old cartridge.",
        estimatedTime: 20,
      },
      {
        id: "reassemble",
        title: "Reassemble Faucet",
        description:
          "Reverse disassembly process. Insert stem or cartridge, ensuring proper alignment. Install retaining clips. Thread on packing nut hand-tight, then snug with wrench (don't overtighten). Replace handle, aligning with hot/cold indicators. Secure set screw and replace decorative cap. Ensure handle moves smoothly through full range.",
        beginnerTips:
          "Hand-tighten everything first to ensure threads engage properly. Then use tools for final tightening. Don't force anything.",
        proTips:
          "Apply small amount of Teflon tape to threaded parts for easier future disassembly. Wrap clockwise (direction of tightening).",
        commonMistakes:
          "Overtightening damages new parts and makes future repairs difficult. Snug is sufficient - you're compressing rubber, not metal-to-metal.",
        estimatedTime: 20,
      },
      {
        id: "test-adjust",
        title: "Test & Adjust",
        description:
          "Slowly open shut-off valves while watching for leaks at connections. Open faucet to purge air from lines - water will sputter initially. Check for leaks around handle and spout. Let water run for 2 minutes. Turn off and check for drips. If still dripping, may need to tighten packing nut slightly or check valve seat condition.",
        beginnerTips:
          "Small leaks around handle usually fixed by tightening packing nut 1/4 turn. Don't overtighten - makes handle hard to turn.",
        proTips:
          "If faucet still drips after repair, problem may be valve seat damage or incorrect part size. Recheck all components.",
        safetyWarning:
          "If you see water leaking from supply line connections, immediately shut off water and tighten connections.",
        commonMistakes:
          "Declaring success too soon. Let faucet sit closed for 10 minutes, then check for drips. Some leaks are slow to appear.",
        estimatedTime: 15,
      },
      {
        id: "cleanup-maintenance",
        title: "Clean Up & Preventive Maintenance",
        description:
          "Wipe down faucet and sink area. Dispose of old parts. Store leftover repair kit parts for future use. Clean aerator (faucet tip) by unscrewing and rinsing screen. Check supply line connections for corrosion. Consider adding shut-off valves if not present.",
        beginnerTips: "Clean faucet aerator every 6 months to maintain good water flow and prevent mineral buildup.",
        proTips:
          "Mark calendar to inspect faucets annually. Catching small leaks early prevents water damage and high water bills.",
        commonMistakes:
          "Ignoring small drips. A faucet dripping once per second wastes 3,000 gallons per year - about $35 in water costs.",
        estimatedTime: 15,
      },
    ],
  },
  {
    id: "roof-repair",
    name: "Roof Shingle Repair",
    category: "Roofing",
    description: "Fix damaged or missing roof shingles to prevent leaks",
    difficulty: "intermediate",
    baseCost: { min: 100, max: 400 },
    baseTime: 4,
    safetyEquipment: ["Safety harness", "Non-slip shoes", "Safety glasses", "Work gloves"],
    permitRequired: false,
    seasonalConsiderations:
      "Best done in mild weather (50-80°F). Avoid hot days (shingles tear easily) and cold days (shingles are brittle).",
    materials: [
      {
        id: "shingles",
        name: "Replacement Asphalt Shingles",
        description: "Match existing roof shingles",
        specifications: "Buy bundle matching color and style, typically 3-tab or architectural",
        estimatedCost: 35,
        affiliateLink: "https://amazon.com/shingles",
      },
      {
        id: "roofing-cement",
        name: "Roofing Cement",
        description: "Asphalt-based adhesive for securing shingles",
        specifications: "Waterproof, flexible when cured",
        estimatedCost: 12,
        affiliateLink: "https://amazon.com/roofing-cement",
      },
      {
        id: "roofing-nails",
        name: "Galvanized Roofing Nails",
        description: "1.25-inch nails with large heads",
        specifications: "Corrosion-resistant",
        estimatedCost: 8,
        affiliateLink: "https://amazon.com/roofing-nails",
      },
      {
        id: "caulk",
        name: "Exterior Caulk",
        description: "For sealing small gaps",
        estimatedCost: 7,
        affiliateLink: "https://amazon.com/caulk",
      },
    ],
    tools: [
      {
        id: "pry-bar",
        name: "Flat Pry Bar",
        description: "For removing damaged shingles and nails",
        affiliateLink: "https://amazon.com/pry-bar",
      },
      {
        id: "hammer",
        name: "Roofing Hammer",
        description: "With nail puller and hatchet blade",
        affiliateLink: "https://amazon.com/hammer",
      },
      {
        id: "utility-knife",
        name: "Utility Knife with Hook Blades",
        description: "For cutting shingles",
        affiliateLink: "https://amazon.com/utility-knife",
      },
      {
        id: "caulk-gun",
        name: "Caulk Gun",
        description: "For applying roofing cement",
        affiliateLink: "https://amazon.com/caulk-gun",
      },
      {
        id: "ladder",
        name: "Extension Ladder",
        description: "Extends 3 feet above roof edge",
        affiliateLink: "https://amazon.com/ladder",
      },
      {
        id: "safety-harness",
        name: "Roof Safety Harness Kit",
        description: "Fall protection system with anchor",
        affiliateLink: "https://amazon.com/safety-harness",
      },
    ],
    steps: [
      {
        id: "safety-setup",
        title: "Set Up Safety Equipment",
        description:
          "Choose dry, calm day with temperatures 50-80°F. Set up extension ladder at 75-degree angle (1 foot out for every 4 feet up), extending 3 feet above roof edge. Secure ladder base. Install roof anchor and attach safety harness. Wear non-slip shoes. Have helper on ground to steady ladder and assist.",
        beginnerTips:
          "Never work on roof alone. Always have someone nearby in case of emergency. Check weather forecast - avoid working if rain expected.",
        proTips:
          "Use ladder stabilizer to prevent gutter damage and provide wider, more stable base. Tie off ladder at top for extra security.",
        safetyWarning:
          "Falls from roofs are leading cause of DIY injuries. Always use fall protection on roofs with pitch over 6:12 or heights over 10 feet. Never work on wet or icy roof.",
        commonMistakes:
          "Overreaching while on roof. Move your position instead of stretching - maintains balance and prevents falls.",
        estimatedTime: 30,
      },
      {
        id: "assess-damage",
        title: "Assess Damage",
        description:
          "Carefully inspect damaged area. Look for missing, cracked, curled, or torn shingles. Check surrounding shingles for damage. Inspect underlayment (felt paper) beneath damaged shingles for tears. Take photos for reference. Determine if repair is sufficient or if larger section needs replacement.",
        beginnerTips:
          "If more than 30% of roof is damaged, or if roof is over 20 years old, consider full roof replacement instead of repairs.",
        proTips:
          "Check attic for water stains on underside of roof deck. Indicates where leaks are occurring and helps prioritize repairs.",
        commonMistakes:
          "Only fixing visible damage without checking surrounding area. Often damage extends beyond what's obvious from ground.",
        estimatedTime: 20,
      },
      {
        id: "remove-damaged",
        title: "Remove Damaged Shingles",
        description:
          "Carefully lift edges of shingles above damaged area. Use pry bar to remove nails holding damaged shingle - there are typically 4-6 nails per shingle. Slide out damaged shingle. Remove any remaining nails or debris. If underlayment is torn, patch with roofing cement and small piece of felt paper.",
        beginnerTips:
          "Work gently to avoid damaging surrounding good shingles. Shingles are brittle, especially in cold weather.",
        proTips:
          "On hot days, shingles are soft and tear easily. Work in morning or evening when temperatures are cooler. Place scrap plywood on roof to kneel on - distributes weight and prevents damage.",
        safetyWarning:
          "Watch for exposed nails when lifting shingles. Wear gloves to prevent cuts. Dispose of old shingles safely - nails are sharp.",
        commonMistakes:
          "Tearing surrounding shingles when removing damaged ones. Lift gently and use pry bar carefully to avoid collateral damage.",
        estimatedTime: 30,
      },
      {
        id: "prepare-new",
        title: "Prepare New Shingle",
        description:
          "Cut replacement shingle to size if needed using utility knife and straightedge. Shingle should match size of removed piece. Round top corners slightly with utility knife - helps shingle slide under upper shingles. Apply thin bead of roofing cement to back of shingle along top edge.",
        beginnerTips:
          "If you can't find exact color match, take sample of old shingle to roofing supplier. They can often match discontinued colors.",
        proTips:
          "New shingles will be slightly different color than weathered existing shingles. Color will blend over time as new shingle weathers.",
        commonMistakes:
          "Cutting shingle too large makes installation difficult. Cut slightly undersized - easier to add cement than to trim after installation.",
        estimatedTime: 15,
      },
      {
        id: "install-shingle",
        title: "Install Replacement Shingle",
        description:
          "Slide new shingle into position, aligning with surrounding shingles. Ensure tabs line up with adjacent shingles. Lift upper shingles and nail new shingle in place - 4 nails minimum, positioned just below seal strip. Apply dab of roofing cement over each nail head. Press upper shingles down onto seal strip.",
        beginnerTips:
          "Nails should penetrate through new shingle and into roof deck, but not protrude through underside. Use 1.25-inch nails for standard shingles.",
        proTips:
          "In cold weather, seal strip won't activate. Apply small dabs of roofing cement under tabs of upper shingles to secure them to new shingle.",
        safetyWarning:
          "Don't over-nail. Excess nails create more potential leak points. Four nails per shingle is sufficient.",
        commonMistakes:
          "Nailing through seal strip of upper shingles. Nails should be just below seal strip, not through it.",
        estimatedTime: 20,
      },
      {
        id: "seal-edges",
        title: "Seal Edges & Final Check",
        description:
          "Apply roofing cement under edges of all lifted shingles. Press firmly to seal. Apply small amount of cement to any exposed nail heads. Smooth cement with putty knife. Inspect repair from ground with binoculars to ensure shingles lay flat and align properly. Check attic after next rain for leaks.",
        beginnerTips:
          "Don't use too much roofing cement - excess squeezes out and looks messy. Thin layer is sufficient for waterproof seal.",
        proTips:
          "Sprinkle a few granules from old shingle onto wet roofing cement. Helps cement blend in and protects from UV damage.",
        commonMistakes:
          "Not sealing edges of lifted shingles. Wind can get under unsealed edges and cause more damage.",
        estimatedTime: 15,
      },
      {
        id: "cleanup-inspection",
        title: "Clean Up & Schedule Follow-Up",
        description:
          "Carefully collect all debris, nails, and old shingles. Use magnetic sweeper around house perimeter to pick up dropped nails. Dispose of materials properly. Clean tools. Schedule inspection after next heavy rain to verify repair is watertight. Consider professional roof inspection if multiple areas show damage.",
        beginnerTips:
          "Roofing nails are sharp and dangerous to people and pets. Thoroughly clean up all debris from yard and driveway.",
        proTips:
          "Take photos of completed repair for insurance records. Document date and materials used for future reference.",
        safetyWarning:
          "Properly store ladder and safety equipment. Coil ropes and harness to prevent tangling for next use.",
        commonMistakes:
          "Not checking attic after repair. Small leaks may not be visible from outside but cause damage over time.",
        estimatedTime: 30,
      },
    ],
  },
]

export const categories = [
  "All Projects",
  "Painting",
  "Flooring",
  "Carpentry",
  "Plumbing",
  "Outdoor",
  "Tiling",
  "Roofing",
]
