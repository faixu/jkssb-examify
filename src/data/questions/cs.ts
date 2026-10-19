import { Flashcard } from '../../types';

export const CS_QUESTIONS: Flashcard[] = [
  {
    id: 'cs-1',
    categoryId: 'cs',
    question: 'What is the worst-case time complexity of QuickSort?',
    answer: 'O(n²)',
    options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(log n)'],
    explanation: 'QuickSort has an average time complexity of O(n log n), but if poor pivots are repeatedly chosen (e.g. sorted array with last element pivot), it degrades to O(n²).',
    tip: 'Average: O(n log n). Worst case (unbalanced partitions): O(n²).',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-2',
    categoryId: 'cs',
    question: 'Which data structure operates on a Last-In, First-Out (LIFO) principle?',
    answer: 'Stack',
    options: ['Stack', 'Queue', 'Heap', 'Hash Table'],
    explanation: 'A stack operates on LIFO (e.g., call stack, undo/redo). A queue operates on FIFO (First-In, First-Out).',
    tip: 'Stack = LIFO (plate stack). Queue = FIFO (line at ticket counter).',
    difficulty: 'beginner'
  },
  {
    id: 'cs-3',
    categoryId: 'cs',
    question: 'What are the four necessary Coffman conditions required for an OS Deadlock to occur?',
    answer: 'Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait',
    options: ['Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait', 'Race Condition, Memory Leak, Segmentation Fault, Stack Overflow', 'Paging, Thrashing, Inversion, Scheduling', 'Encryption, Authentication, Non-repudiation, Integrity'],
    explanation: 'All four conditions must hold simultaneously for a deadlock to exist. Breaking even one condition prevents or resolves the deadlock.',
    tip: 'Coffman conditions: ME, H&W, NP, CW.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-4',
    categoryId: 'cs',
    question: 'In TCP networking, how many packets are exchanged in the standard connection establishment handshake?',
    answer: 'Three (SYN, SYN-ACK, ACK)',
    options: ['Three (SYN, SYN-ACK, ACK)', 'Two (SYN, ACK)', 'Four (SYN, ACK, FIN, ACK)', 'One (HELO)'],
    explanation: 'The TCP 3-way handshake: Client sends SYN, Server replies with SYN-ACK, Client acknowledges with ACK before data transmission begins.',
    tip: 'SYN -> SYN-ACK -> ACK',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-5',
    categoryId: 'cs',
    question: 'What is the average-case time complexity of inserting and looking up an item in a balanced Hash Table?',
    answer: 'O(1)',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
    explanation: 'With a uniform hash function and low load factor, hash tables achieve constant average time O(1) for lookup, insertion, and deletion.',
    tip: 'Hash Table = O(1) average lookup.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-6',
    categoryId: 'cs',
    question: 'What is the primary difference between a Process and a Thread?',
    answer: 'Processes have independent virtual address spaces; threads within a process share memory',
    options: ['Processes have independent virtual address spaces; threads within a process share memory', 'Threads run on GPU cores while processes run exclusively on CPU', 'Processes can only execute sequentially, while threads cannot be context-switched', 'Threads require dedicated physical network interfaces'],
    explanation: 'A process is an executing program instance with isolated memory and resources. Threads are lightweight execution units inside a process sharing code, data, and heap.',
    tip: 'Process = isolated memory. Threads = shared process memory.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-7',
    categoryId: 'cs',
    question: 'In asymmetric public-key cryptography (e.g. RSA), which key is used to decrypt a message encrypted with Alice\'s public key?',
    answer: 'Alice\'s Private Key',
    options: ['Alice\'s Private Key', 'Alice\'s Public Key', 'Bob\'s Public Key', 'A shared ephemeral symmetric token'],
    explanation: 'Data encrypted with a public key can only be decrypted by the corresponding private key held exclusively by the recipient.',
    tip: 'Public key encrypts; matched Private key decrypts.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-8',
    categoryId: 'cs',
    question: 'What is "Thrashing" in an operating system virtual memory subsystem?',
    answer: 'Excessive paging where the OS spends more time swapping pages than executing code',
    options: ['Excessive paging where the OS spends more time swapping pages than executing code', 'Overheating of the central processor unit under stress benchmark tests', 'Corrupt sector formation across solid-state flash disk drives', 'Uncontrolled thread creation leading to recursive stack exhaustion'],
    explanation: 'When active working sets exceed physical RAM, pages are constantly evicted to disk and immediately faulted back in, causing throughput to crash to near zero.',
    tip: 'Thrashing = Spends more time page-swapping than running code.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-9',
    categoryId: 'cs',
    question: 'What is the worst-case time complexity of MergeSort?',
    answer: 'O(n log n)',
    options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'],
    explanation: 'MergeSort is a divide-and-conquer algorithm that consistently splits arrays in half and merges them in linear time, guaranteeing O(n log n) in all cases.',
    tip: 'MergeSort is consistently O(n log n) in best, average, and worst cases.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-10',
    categoryId: 'cs',
    question: 'What is the time complexity of Binary Search on a sorted array of size n?',
    answer: 'O(log n)',
    options: ['O(log n)', 'O(n)', 'O(1)', 'O(n log n)'],
    explanation: 'Each step cuts the remaining search space in half by comparing the target with the middle element: log2(n) comparisons.',
    tip: 'Binary Search = O(log n) time (requires sorted array).',
    difficulty: 'beginner'
  },
  {
    id: 'cs-11',
    categoryId: 'cs',
    question: 'Which tree traversal visits nodes in the order: Left Subtree, Root Node, Right Subtree?',
    answer: 'In-order Traversal',
    options: ['In-order Traversal', 'Pre-order Traversal', 'Post-order Traversal', 'Level-order Traversal'],
    explanation: 'In a Binary Search Tree (BST), in-order traversal visits all nodes in ascending sorted order.',
    tip: 'In-order: Left -> Root -> Right (produces sorted order in BST).',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-12',
    categoryId: 'cs',
    question: 'Which tree traversal visits the Root Node before visiting its subtrees (Root, Left, Right)?',
    answer: 'Pre-order Traversal',
    options: ['Pre-order Traversal', 'In-order Traversal', 'Post-order Traversal', 'Breadth-First Traversal'],
    explanation: 'Pre-order (Root -> Left -> Right) is widely used for creating copies of trees or serializing tree structures.',
    tip: 'Pre-order: Root first, then children.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-13',
    categoryId: 'cs',
    question: 'Which tree traversal visits subtrees before visiting the Root Node (Left, Right, Root)?',
    answer: 'Post-order Traversal',
    options: ['Post-order Traversal', 'Pre-order Traversal', 'In-order Traversal', 'Depth-limited Traversal'],
    explanation: 'Post-order (Left -> Right -> Root) is ideal for deleting a tree or evaluating mathematical postfix (Reverse Polish) expressions.',
    tip: 'Post-order: Children first, Root last (deleting a tree).',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-14',
    categoryId: 'cs',
    question: 'What is the maximum number of children a node can have in a Binary Tree?',
    answer: '2',
    options: ['2', '1', '3', 'Unlimited'],
    explanation: 'By definition, each node in a binary tree has at most two children, typically referred to as the left child and right child.',
    tip: 'Binary Tree = At most 2 children per node.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-15',
    categoryId: 'cs',
    question: 'What is an AVL Tree in computer science?',
    answer: 'A self-balancing Binary Search Tree where the heights of the two child subtrees differ by at most one',
    options: ['A self-balancing Binary Search Tree where the heights of the two child subtrees differ by at most one', 'A tree where every leaf node must be stored at the same depth', 'A trie structure used exclusively for natural language text search', 'A tree where nodes can have any variable number of children'],
    explanation: 'Named after Adelson-Velsky and Landis (1962): uses tree rotations to maintain balance, ensuring strict O(log n) lookups, insertions, and deletions.',
    tip: 'AVL Tree: Balance factor (height difference) is strictly -1, 0, or +1.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-16',
    categoryId: 'cs',
    question: 'What is a Red-Black Tree?',
    answer: 'A self-balancing binary search tree using node colors (red and black) and rotation rules to ensure height is O(log n)',
    options: ['A self-balancing binary search tree using node colors (red and black) and rotation rules to ensure height is O(log n)', 'A cryptographic hash tree used in blockchain networks', 'A B-tree optimized for spinning hard disk block read/write operations', 'A tree where leaf nodes store only binary numbers'],
    explanation: 'Widely used in standard libraries (e.g. C++ std::map, Java TreeMap) because it requires fewer rotations during rebalancing than AVL trees.',
    tip: 'Red-Black tree: Balances via coloring rules and rotations (std::map).',
    difficulty: 'advanced'
  },
  {
    id: 'cs-17',
    categoryId: 'cs',
    question: 'What is a B-Tree data structure primarily optimized for?',
    answer: 'Disk storage and database indexing where read/write operations occur in large blocks',
    options: ['Disk storage and database indexing where read/write operations occur in large blocks', 'Fast CPU L1 cache line replacement algorithms', 'Rendering 3D polygonal meshes on graphical GPUs', 'Real-time peer-to-peer audio streaming encoding'],
    explanation: 'B-Trees and B+ Trees have large branching factors (high fan-out), minimizing slow disk I/O seek operations by keeping tree depth shallow.',
    tip: 'B-Tree = High fan-out, shallow depth for database disk indexing.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-18',
    categoryId: 'cs',
    question: 'What is a Trie (Prefix Tree) data structure primarily used for?',
    answer: 'Fast retrieval, auto-complete, and prefix matching of strings and dictionaries',
    options: ['Fast retrieval, auto-complete, and prefix matching of strings and dictionaries', 'Calculating shortest paths between vertices in a weighted graph', 'Finding maximum network flow in bipartite graphs', 'Allocating virtual memory pages in operating systems'],
    explanation: 'Nodes store characters along paths representing prefixes; looking up a word of length k takes O(k) time regardless of dictionary size n.',
    tip: 'Trie: O(length) search for word prefixes and autocomplete.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-19',
    categoryId: 'cs',
    question: 'Which algorithm is commonly used to find the shortest path between nodes in a weighted graph with non-negative edge weights?',
    answer: 'Dijkstra\'s Algorithm',
    options: ['Dijkstra\'s Algorithm', 'Kruskal\'s Algorithm', 'Floyd-Warshall Algorithm', 'Tarjan\'s Algorithm'],
    explanation: 'Using a min-priority heap, Dijkstra\'s algorithm finds single-source shortest paths in O((V + E) log V) time. (Cannot handle negative edge weights).',
    tip: 'Dijkstra = Shortest path with non-negative weights.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-20',
    categoryId: 'cs',
    question: 'Which shortest-path algorithm can handle graphs with Negative edge weights and detect negative cycles?',
    answer: 'Bellman-Ford Algorithm',
    options: ['Bellman-Ford Algorithm', 'Dijkstra\'s Algorithm', 'Prim\'s Algorithm', 'Breadth-First Search (BFS)'],
    explanation: 'Bellman-Ford relaxes all edges V - 1 times with time complexity O(V * E); a further relaxation detects negative-weight cycles.',
    tip: 'Bellman-Ford handles negative weights and detects negative cycles.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-21',
    categoryId: 'cs',
    question: 'What is a Minimum Spanning Tree (MST)?',
    answer: 'A subset of edges connecting all vertices in an undirected weighted graph with minimum total edge weight and no cycles',
    options: ['A subset of edges connecting all vertices in an undirected weighted graph with minimum total edge weight and no cycles', 'The shortest path between the two furthest nodes in a graph', 'A tree where every node has degree equal to two', 'A directed acyclic graph representing topological dependencies'],
    explanation: 'Contains exactly V - 1 edges. Commonly computed using Kruskal\'s algorithm (greedy edge sorting + Disjoint Set Union) or Prim\'s algorithm.',
    tip: 'MST: Connects all V vertices with V - 1 edges at minimum total weight.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-22',
    categoryId: 'cs',
    question: 'What data structure is used to implement Breadth-First Search (BFS) traversal of a graph?',
    answer: 'Queue (FIFO)',
    options: ['Queue (FIFO)', 'Stack (LIFO)', 'Min-Heap', 'Hash Set'],
    explanation: 'BFS explores neighbor vertices level by level, queuing unvisited adjacent nodes to guarantee shortest hop-count paths in unweighted graphs.',
    tip: 'BFS uses a Queue (level-by-level). DFS uses a Stack (depth-first).',
    difficulty: 'beginner'
  },
  {
    id: 'cs-23',
    categoryId: 'cs',
    question: 'What data structure (or call mechanism) is used to implement Depth-First Search (DFS)?',
    answer: 'Stack (or Call Stack via Recursion)',
    options: ['Stack (or Call Stack via Recursion)', 'FIFO Queue', 'Priority Queue', 'Circular Buffer'],
    explanation: 'DFS explores as deep as possible along each branch before backtracking, utilizing the system call stack or an explicit LIFO stack.',
    tip: 'DFS = Stack / Recursion.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-24',
    categoryId: 'cs',
    question: 'What is "Topological Sorting" of a graph?',
    answer: 'A linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u -> v, u comes before v',
    options: ['A linear ordering of vertices in a Directed Acyclic Graph (DAG) such that for every directed edge u -> v, u comes before v', 'Sorting graph vertices based on their degree of connectivity', 'Ordering nodes alphabetically using depth-first search timestamps', 'Arranging vertices in a 2D Euclidean spatial grid'],
    explanation: 'Used for task scheduling, build systems (e.g. Make, Webpack), and dependency resolution (Kahn\'s algorithm or post-order DFS).',
    tip: 'Topological sort: Orders tasks respecting dependencies in a DAG.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-25',
    categoryId: 'cs',
    question: 'What is a "Race Condition" in concurrent multithreaded programming?',
    answer: 'When program output depends on the non-deterministic timing or execution order of multiple threads accessing shared mutable state',
    options: ['When program output depends on the non-deterministic timing or execution order of multiple threads accessing shared mutable state', 'When an algorithm exceeds its allocated execution time limit', 'When network latency slows down database queries', 'When CPU temperature throttles processing clock speeds'],
    explanation: 'Occurs when two threads read and write shared data without synchronization (e.g. both doing counter++ simultaneously, losing updates).',
    tip: 'Race condition = Unsynchronized concurrent access to shared mutable data.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-26',
    categoryId: 'cs',
    question: 'What is a "Mutex" (Mutual Exclusion Lock)?',
    answer: 'A synchronization primitive that grants exclusive access to a shared resource or critical section to only one thread at a time',
    options: ['A synchronization primitive that grants exclusive access to a shared resource or critical section to only one thread at a time', 'A hardware register storing memory addresses of I/O interrupts', 'A thread pool manager that schedules background daemon tasks', 'An atomic instruction that increments integer variables'],
    explanation: 'A thread acquires the mutex before entering the critical section and releases it when finished. Other threads block until it is unlocked.',
    tip: 'Mutex: Only ONE thread enters critical section at a time.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-27',
    categoryId: 'cs',
    question: 'What is a "Semaphore" in operating systems?',
    answer: 'A synchronization variable with an integer counter used to control access to a finite number of shared resources',
    options: ['A synchronization variable with an integer counter used to control access to a finite number of shared resources', 'A system call that creates a new child process', 'A virtual memory page table translation buffer', 'A signal sent to terminate a hung process'],
    explanation: 'Invented by Edsger Dijkstra: wait() / P() decrements the counter; signal() / V() increments it. A binary semaphore acts like a mutex.',
    tip: 'Counting Semaphore: Controls access to N available resources.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-28',
    categoryId: 'cs',
    question: 'What is "Priority Inversion" in real-time operating systems?',
    answer: 'When a low-priority task holds a shared resource needed by a high-priority task, while a medium-priority task preempts the low-priority task',
    options: ['When a low-priority task holds a shared resource needed by a high-priority task, while a medium-priority task preempts the low-priority task', 'When the OS scheduler runs background processes ahead of user UI threads', 'When hardware interrupts are disabled during kernel boot sequences', 'When memory pages are swapped out in reverse chronological order'],
    explanation: 'Famously crippled the Mars Pathfinder spacecraft in 1997. Solved using "Priority Inheritance", where the low task temporarily inherits high priority.',
    tip: 'Priority Inversion solved by Priority Inheritance Protocol.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-29',
    categoryId: 'cs',
    question: 'What is "Virtual Memory" in computer architecture?',
    answer: 'A memory management technique that creates an idealized abstraction of storage, mapping virtual addresses to physical RAM and secondary disk storage',
    options: ['A memory management technique that creates an idealized abstraction of storage, mapping virtual addresses to physical RAM and secondary disk storage', 'Volatile RAM installed on virtualized cloud servers', 'A software emulation of CPU registers inside virtual machines', 'Cache memory built directly onto silicon processor dies'],
    explanation: 'Provides process isolation, memory protection, and allows programs to exceed physical RAM capacity using paging.',
    tip: 'Virtual memory provides memory isolation and abstracts physical RAM.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-30',
    categoryId: 'cs',
    question: 'What is the function of the Translation Lookaside Buffer (TLB)?',
    answer: 'A fast hardware cache in the MMU that stores recent virtual-to-physical address page translations',
    options: ['A fast hardware cache in the MMU that stores recent virtual-to-physical address page translations', 'A buffer that stores outbound network Ethernet packets', 'A queue for holding pending CPU interrupt requests', 'A disk cache for database index transaction logs'],
    explanation: 'A TLB hit allows virtual addresses to be translated into physical RAM addresses in a fraction of a nanosecond, bypassing multi-level page table walks.',
    tip: 'TLB = Hardware cache for virtual-to-physical page table translations.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-31',
    categoryId: 'cs',
    question: 'What is a "Page Fault"?',
    answer: 'An interrupt raised by hardware when a program accesses a virtual memory page not currently mapped in physical RAM',
    options: ['An interrupt raised by hardware when a program accesses a virtual memory page not currently mapped in physical RAM', 'A syntax compilation error in web page HTML rendering', 'A fatal hardware short circuit on a memory motherboard bus', 'A corrupted sector identified during disk defragmentation'],
    explanation: 'The OS kernel handles the page fault by retrieving the required page from disk swap space into RAM, updating page tables, and resuming execution.',
    tip: 'Page fault: Requested virtual page is on disk, not RAM (OS loads it).',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-32',
    categoryId: 'cs',
    question: 'What is the memory hierarchy order from FASTEST/SMALLEST to SLOWEST/LARGEST?',
    answer: 'CPU Registers -> L1 Cache -> L2 Cache -> L3 Cache -> Main Memory (RAM) -> Solid State Drive (SSD) -> Magnetic Hard Disk',
    options: ['CPU Registers -> L1 Cache -> L2 Cache -> L3 Cache -> Main Memory (RAM) -> Solid State Drive (SSD) -> Magnetic Hard Disk', 'RAM -> L1 Cache -> CPU Registers -> SSD -> L3 Cache', 'L3 Cache -> L2 Cache -> L1 Cache -> RAM -> Registers', 'SSD -> RAM -> L3 Cache -> L2 Cache -> Registers'],
    explanation: 'Registers take <1 ns; L1 ~1 ns; L2 ~3-4 ns; L3 ~10-20 ns; RAM ~50-100 ns; NVMe SSD ~10-50 μs; HDD ~5-10 ms.',
    tip: 'Registers (<1ns) -> L1/L2/L3 Cache -> RAM (100ns) -> Disk (ms).',
    difficulty: 'beginner'
  },
  {
    id: 'cs-33',
    categoryId: 'cs',
    question: 'What does "Cache Locality" (Temporal and Spatial Locality) refer to?',
    answer: 'Temporal: recently accessed data will likely be accessed soon; Spatial: nearby memory addresses will likely be accessed soon',
    options: ['Temporal: recently accessed data will likely be accessed soon; Spatial: nearby memory addresses will likely be accessed soon', 'Temporal relates to geographic timezone; spatial relates to datacenter racks', 'Temporal relates to CPU clock speed; spatial relates to bus wire length', 'Temporal relates to file creation date; spatial relates to disk sector fragmentation'],
    explanation: 'Why sequential array iterations are vastly faster than random linked-list node hopping: spatial locality maximizes CPU cache line utilization.',
    tip: 'Temporal = Re-use soon. Spatial = Use nearby neighbors.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-34',
    categoryId: 'cs',
    question: 'What are the 7 layers of the OSI Networking Model from Layer 7 (Top) to Layer 1 (Bottom)?',
    answer: 'Application, Presentation, Session, Transport, Network, Data Link, Physical',
    options: ['Application, Presentation, Session, Transport, Network, Data Link, Physical', 'Application, Network, Transport, Internet, Link, Hardware, Optical', 'Physical, Data Link, Network, Transport, Session, Presentation, Application', 'User, Protocol, Routing, Addressing, Switching, Cable, Signal'],
    explanation: 'Mnemonic: "All People Seem To Need Data Processing" (Layer 7 down to Layer 1).',
    tip: 'OSI 7 Layers: Application, Presentation, Session, Transport, Network, Data Link, Physical.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-35',
    categoryId: 'cs',
    question: 'At which OSI layer does the Internet Protocol (IP) and Routers operate?',
    answer: 'Layer 3 (Network Layer)',
    options: ['Layer 3 (Network Layer)', 'Layer 2 (Data Link Layer)', 'Layer 4 (Transport Layer)', 'Layer 7 (Application Layer)'],
    explanation: 'Layer 3 handles packet addressing, routing across internetworks, and fragmentation using IP addresses.',
    tip: 'Layer 3 = Network (IP addresses, Routers).',
    difficulty: 'beginner'
  },
  {
    id: 'cs-36',
    categoryId: 'cs',
    question: 'At which OSI layer do Ethernet Switches and MAC addresses operate?',
    answer: 'Layer 2 (Data Link Layer)',
    options: ['Layer 2 (Data Link Layer)', 'Layer 1 (Physical Layer)', 'Layer 3 (Network Layer)', 'Layer 4 (Transport Layer)'],
    explanation: 'Layer 2 frames data for transmission across a single local physical network segment using 48-bit MAC addresses.',
    tip: 'Layer 2 = Data Link (MAC addresses, Ethernet switches).',
    difficulty: 'beginner'
  },
  {
    id: 'cs-37',
    categoryId: 'cs',
    question: 'What is the primary difference between TCP and UDP at the Transport Layer (Layer 4)?',
    answer: 'TCP is connection-oriented, reliable, and ordered; UDP is connectionless, unreliable, and low-latency',
    options: ['TCP is connection-oriented, reliable, and ordered; UDP is connectionless, unreliable, and low-latency', 'TCP operates on fiber optic cables; UDP operates on Wi-Fi wireless', 'UDP guarantees packet delivery with automatic retransmissions; TCP does not', 'TCP packet headers are strictly smaller than UDP headers'],
    explanation: 'TCP includes handshakes, sequence numbers, checksums, and flow control (web, email, file transfer). UDP broadcasts packets with minimal overhead (DNS, gaming, VoIP).',
    tip: 'TCP = Reliable, ordered (heavy). UDP = Fast, stateless (lightweight).',
    difficulty: 'beginner'
  },
  {
    id: 'cs-38',
    categoryId: 'cs',
    question: 'What is the Address Resolution Protocol (ARP) used for in networking?',
    answer: 'Mapping a known IP address (Layer 3) to a physical MAC hardware address (Layer 2) on a local network',
    options: ['Mapping a known IP address (Layer 3) to a physical MAC hardware address (Layer 2) on a local network', 'Translating domain names into numerical IP addresses', 'Assigning dynamic IP addresses to newly connected client devices', 'Encrypting HTTP web traffic over Transport Layer Security'],
    explanation: 'Broadcasts: "Who has IP 192.168.1.5? Tell 192.168.1.1". The owner replies with its MAC address.',
    tip: 'ARP = IP Address -> MAC Address translation.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-39',
    categoryId: 'cs',
    question: 'What does DNS (Domain Name System) do?',
    answer: 'Translates human-readable domain names (like example.com) into numerical IP addresses (like 93.184.216.34)',
    options: ['Translates human-readable domain names (like example.com) into numerical IP addresses (like 93.184.216.34)', 'Assigns hardware MAC addresses to network interfaces', 'Encrypts file attachments inside email protocols', 'Routes packets across autonomous border gateway systems'],
    explanation: 'Acts as the phonebook of the Internet, using hierarchical distributed name servers (Root, TLD, Authoritative).',
    tip: 'DNS = Domain Name -> IP Address lookup.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-40',
    categoryId: 'cs',
    question: 'What are the ACID properties guaranteed by relational database transactions?',
    answer: 'Atomicity, Consistency, Isolation, Durability',
    options: ['Atomicity, Consistency, Isolation, Durability', 'Accuracy, Concurrency, Integrity, Distribution', 'Availability, Cacheability, Idempotency, Determinism', 'Authentication, Confidentiality, Interoperability, Decoupling'],
    explanation: 'Atomicity: all or nothing. Consistency: valid state rules maintained. Isolation: concurrent transactions do not interfere. Durability: committed writes survive crashes.',
    tip: 'ACID = Atomicity, Consistency, Isolation, Durability.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-41',
    categoryId: 'cs',
    question: 'What does the CAP Theorem state about distributed data systems?',
    answer: 'A distributed system can guarantee at most two of three properties simultaneously: Consistency, Availability, and Partition Tolerance',
    options: ['A distributed system can guarantee at most two of three properties simultaneously: Consistency, Availability, and Partition Tolerance', 'Database queries cannot exceed computational polynomial time', 'Network connections must balance caching, authentication, and privacy', 'All distributed nodes must process transactions at identical clock ticks'],
    explanation: 'Formulated by Eric Brewer: in the presence of a network Partition (which is inevitable in distributed physical networks), a system must choose Consistency (CP) or Availability (AP).',
    tip: 'CAP Theorem: Choose 2 of Consistency, Availability, Partition Tolerance (in practice, CP vs AP).',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-42',
    categoryId: 'cs',
    question: 'What is the difference between SQL (Relational) and NoSQL databases?',
    answer: 'SQL uses structured schemas and ACID relational tables; NoSQL uses flexible dynamic schemas (document, key-value, graph) and prioritizes horizontal scaling',
    options: ['SQL uses structured schemas and ACID relational tables; NoSQL uses flexible dynamic schemas (document, key-value, graph) and prioritizes horizontal scaling', 'SQL can only run on single-core computers; NoSQL runs only on mainframes', 'NoSQL databases do not support primary keys or index searches', 'SQL does not support data queries or joins'],
    explanation: 'SQL (PostgreSQL, MySQL) excels at relational integrity and complex joins. NoSQL (MongoDB, Redis, Cassandra) excels at unstructured documents, high write throughput, and horizontal sharding.',
    tip: 'SQL = Schema, Relational, ACID. NoSQL = Flexible schema, horizontal scaling.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-43',
    categoryId: 'cs',
    question: 'What is Database Normalization (e.g. 1NF, 2NF, 3NF)?',
    answer: 'The process of structuring relational tables to reduce data redundancy and eliminate update/delete anomalies',
    options: ['The process of structuring relational tables to reduce data redundancy and eliminate update/delete anomalies', 'Converting all string characters to lowercase in SQL queries', 'Backing up database tables to external magnetic tape media', 'Compressing database disk storage using zlib compression'],
    explanation: '1NF: Atomic values; 2NF: No partial key dependencies; 3NF: No transitive functional dependencies (non-key fields depend ONLY on the primary key).',
    tip: '3NF: Every attribute depends on the key, the whole key, and nothing but the key.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-44',
    categoryId: 'cs',
    question: 'What is a "Database Index" and what is its trade-off?',
    answer: 'A data structure (often B-Tree) that speeds up data retrieval queries (SELECT) at the cost of slower writes (INSERT/UPDATE) and extra storage',
    options: ['A data structure (often B-Tree) that speeds up data retrieval queries (SELECT) at the cost of slower writes (INSERT/UPDATE) and extra storage', 'A backup archive containing deleted rows for audit compliance', 'A primary key constraint that prevents duplicate email addresses', 'A software proxy that distributes queries across read replicas'],
    explanation: 'Indexes avoid full table scans. However, every write must also update the index trees, introducing write latency overhead.',
    tip: 'Indexes speed up reads; slow down writes; consume storage.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-45',
    categoryId: 'cs',
    question: 'What is the "P versus NP" problem in theoretical computer science?',
    answer: 'Whether every problem whose solution can be quickly verified in polynomial time (NP) can also be solved in polynomial time (P)',
    options: ['Whether every problem whose solution can be quickly verified in polynomial time (NP) can also be solved in polynomial time (P)', 'Whether parallel processors are faster than quantum processors', 'Whether programming languages can eliminate all runtime null pointer exceptions', 'Whether computer memory can expand indefinitely without bus bottlenecks'],
    explanation: 'One of the Millennium Prize Problems: widely believed that P ≠ NP (verifying a solution like Sudoku is much easier than solving it from scratch).',
    tip: 'P vs NP: Is verification as easy as computation?',
    difficulty: 'advanced'
  },
  {
    id: 'cs-46',
    categoryId: 'cs',
    question: 'What is an "NP-Complete" problem?',
    answer: 'A problem in NP to which any other NP problem can be reduced in polynomial time; if any NP-complete problem has a polynomial solution, then P = NP',
    options: ['A problem in NP to which any other NP problem can be reduced in polynomial time; if any NP-complete problem has a polynomial solution, then P = NP', 'A problem that cannot be solved by any Turing machine in finite steps', 'A problem that can be computed only on quantum hardware', 'A problem requiring non-polynomial memory registers'],
    explanation: 'Examples include the Traveling Salesperson Problem (TSP), Boolean Satisfiability (SAT), and the Knapsack Problem (Cook-Levin Theorem).',
    tip: 'NP-Complete: The hardest problems in NP. Solved by heuristics in practice.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-47',
    categoryId: 'cs',
    question: 'What is the "Halting Problem" proven by Alan Turing in 1936?',
    answer: 'It is mathematically impossible to write a general algorithm that determines whether any arbitrary computer program will finish running or run forever',
    options: ['It is mathematically impossible to write a general algorithm that determines whether any arbitrary computer program will finish running or run forever', 'Operating systems must crash when physical RAM runs out', 'Computer clock frequencies cannot exceed 10 Gigahertz', 'Compilers cannot detect syntax errors without human review'],
    explanation: 'Proved via proof by contradiction (diagonalization): demonstrated the fundamental limits of computation and undecidable problems.',
    tip: 'Halting Problem: Undecidable (no program can decide if all programs halt).',
    difficulty: 'advanced'
  },
  {
    id: 'cs-48',
    categoryId: 'cs',
    question: 'What is a "Turing Machine"?',
    answer: 'A mathematical theoretical model of computation consisting of an infinite tape, a read/write head, and a finite state transition table',
    options: ['A mathematical theoretical model of computation consisting of an infinite tape, a read/write head, and a finite state transition table', 'The physical electromechanical machine used to crack the Enigma code', 'The first electronic digital computer built with vacuum tubes', 'A computer that successfully passes the Turing imitation test'],
    explanation: 'Introduced by Alan Turing: any modern computer, regardless of power, can compute the exact same class of algorithms as a Universal Turing Machine.',
    tip: 'Turing Machine: Foundational formal abstraction of universal computation.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-49',
    categoryId: 'cs',
    question: 'What is "Dynamic Programming" in algorithm design?',
    answer: 'Solving complex problems by breaking them into overlapping subproblems, storing results of subproblems (memoization) to avoid redundant recalculation',
    options: ['Solving complex problems by breaking them into overlapping subproblems, storing results of subproblems (memoization) to avoid redundant recalculation', 'Writing code in dynamic interpreted scripting languages like Python', 'Compiling software binaries at runtime using JIT compilers', 'Allocating memory dynamically on the heap using pointers'],
    explanation: 'Essential for problems with optimal substructure and overlapping subproblems (e.g. Fibonacci, shortest paths, 0/1 knapsack, edit distance).',
    tip: 'Dynamic Programming = Recursion + Memoization (storing subproblem solutions).',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-50',
    categoryId: 'cs',
    question: 'What is a "Greedy Algorithm"?',
    answer: 'An algorithmic paradigm that makes the locally optimal choice at each stage with the hope of finding a global optimum',
    options: ['An algorithmic paradigm that makes the locally optimal choice at each stage with the hope of finding a global optimum', 'An algorithm that allocates 100% of available CPU cores', 'A program that consumes all available disk space for cache logs', 'A brute-force algorithm that checks every possible permutation'],
    explanation: 'Greedy works when the problem possesses the greedy-choice property (e.g. Huffman coding, Dijkstra, Fractional Knapsack), but fails when local optima mislead (e.g. 0/1 Knapsack).',
    tip: 'Greedy: Makes best immediate local choice at each step.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-51',
    categoryId: 'cs',
    question: 'What is the "Two\'s Complement" representation used in modern computers for signed integers?',
    answer: 'To negate a binary number, invert all bits (NOT) and add 1',
    options: ['To negate a binary number, invert all bits (NOT) and add 1', 'Set the most significant bit to 1 without altering other bits', 'Subtract the number from 256 in hexadecimal', 'Shift all bits left by two positions and append zeros'],
    explanation: 'Enables arithmetic addition, subtraction, and multiplication to use the exact same digital adder circuitry without requiring separate hardware for signs, having only one zero (no -0).',
    tip: 'Two\'s complement: Invert bits and add 1 (simplifies ALU hardware).',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-52',
    categoryId: 'cs',
    question: 'What is the IEEE 754 standard for single-precision 32-bit floating-point numbers composed of?',
    answer: '1 Sign bit, 8 Exponent bits, and 23 Mantissa (Fraction) bits',
    options: ['1 Sign bit, 8 Exponent bits, and 23 Mantissa (Fraction) bits', '1 Sign bit, 11 Exponent bits, and 52 Mantissa bits', '16 Integer bits and 16 Fractional bits', '4 Sign bits, 12 Exponent bits, and 16 Mantissa bits'],
    explanation: 'Single precision has 32 bits (1+8+23); double precision (64-bit) has 1 sign bit, 11 exponent bits, and 52 mantissa bits.',
    tip: '32-bit float: 1 sign, 8 exponent, 23 mantissa.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-53',
    categoryId: 'cs',
    question: 'What causes a Floating-Point rounding error (e.g. 0.1 + 0.2 = 0.30000000000000004 in JavaScript)?',
    answer: 'Numbers like 0.1 and 0.2 have infinite repeating fractional representations in base-2 binary, causing precision truncation',
    options: ['Numbers like 0.1 and 0.2 have infinite repeating fractional representations in base-2 binary, causing precision truncation', 'A bug in the processor\'s physical arithmetic logic unit', 'Compiler optimization removing insignificant registers', 'Memory page fragmentation inside the JavaScript V8 engine'],
    explanation: 'Just as 1/3 cannot be represented finitely in decimal base-10 (0.3333...), 1/10 cannot be represented finitely in binary base-2 (0.000110011...).',
    tip: 'Decimals like 0.1 repeat infinitely in binary base-2.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-54',
    categoryId: 'cs',
    question: 'What is a "Buffer Overflow" vulnerability?',
    answer: 'Writing more data into a fixed-size buffer than it can hold, overwriting adjacent memory (like function return addresses)',
    options: ['Writing more data into a fixed-size buffer than it can hold, overwriting adjacent memory (like function return addresses)', 'When a network router drops incoming packets during congestion', 'When a video player runs out of buffered streaming frames', 'When a database transaction log exceeds maximum disk quotas'],
    explanation: 'Classic security attack in languages like C/C++ without boundary checking: attackers inject executable shellcode and overwrite stack return pointers to gain execution control.',
    tip: 'Buffer overflow: Writes past array bounds, corrupting adjacent stack/heap memory.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-55',
    categoryId: 'cs',
    question: 'What is a "Cryptographic Hash Function" (e.g. SHA-256)?',
    answer: 'A one-way deterministic mathematical function that maps arbitrary-sized data to a fixed-size digest, infeasible to invert or find collisions',
    options: ['A one-way deterministic mathematical function that maps arbitrary-sized data to a fixed-size digest, infeasible to invert or find collisions', 'A reversible encryption algorithm requiring a public key', 'A compression algorithm that reduces file size without losing data', 'A pseudo-random number generator used in video game engines'],
    explanation: 'Properties: Deterministic, fast to compute, pre-image resistant (one-way), small input change creates radical output change (avalanche effect), collision resistant.',
    tip: 'Hash: One-way, fixed-size output, collision-resistant (SHA-256).',
    difficulty: 'beginner'
  },
  {
    id: 'cs-56',
    categoryId: 'cs',
    question: 'What is the "Avalanche Effect" in cryptographic hashing?',
    answer: 'A slight change in input (even a single bit flip) causes a drastic, unpredictable change in the output hash digest',
    options: ['A slight change in input (even a single bit flip) causes a drastic, unpredictable change in the output hash digest', 'When an encryption key decays over time due to hardware aging', 'When multiple hash functions run in a cascading pipeline', 'The rapid increase in computing power predicted by Moore\'s Law'],
    explanation: 'Crucial for security: prevents attackers from deducing patterns or proximity between different inputs based on their hash digests.',
    tip: 'Avalanche effect: Flip 1 input bit -> ~50% of output hash bits flip.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-57',
    categoryId: 'cs',
    question: 'What is a "Digital Signature"?',
    answer: 'A mathematical scheme that authenticates the digital identity of the sender and proves message integrity using asymmetric cryptography',
    options: ['A mathematical scheme that authenticates the digital identity of the sender and proves message integrity using asymmetric cryptography', 'A digitized image of a handwritten pen signature scanned as a PNG', 'A password typed into an encrypted website form', 'A biometric fingerprint scanned on mobile touchscreens'],
    explanation: 'Sender signs hash of message with their Private Key. Anyone can verify using Sender\'s Public Key, ensuring authenticity and non-repudiation.',
    tip: 'Sign with Private Key; Verify with Public Key.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-58',
    categoryId: 'cs',
    question: 'What is "Transport Layer Security" (TLS) / HTTPS?',
    answer: 'A cryptographic protocol that provides end-to-end encryption, authentication, and data integrity over computer networks',
    options: ['A cryptographic protocol that provides end-to-end encryption, authentication, and data integrity over computer networks', 'A firewall rule blocking port 80 network traffic', 'A compression protocol used to speed up image downloads', 'A proprietary VPN software client developed by Cisco'],
    explanation: 'Uses asymmetric encryption during handshake to authenticate certificates and negotiate a shared symmetric key (AES), then uses fast symmetric encryption for data transfer.',
    tip: 'TLS/HTTPS: Asymmetric handshake negotiates symmetric session keys.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-59',
    categoryId: 'cs',
    question: 'What is a "SQL Injection" (SQLi) attack?',
    answer: 'An attacker inserts malicious SQL code into input fields to manipulate or bypass backend database queries',
    options: ['An attacker inserts malicious SQL code into input fields to manipulate or bypass backend database queries', 'A denial of service attack flooding database ports with TCP SYN packets', 'Stealing database passwords through physical server room intrusion', 'Corrupting database indexes by sending non-ASCII characters'],
    explanation: 'Example: typing "\' OR 1=1 --" to bypass login authentication. Prevented by using Prepared Statements (Parameterized Queries) and ORMs.',
    tip: 'Prevent SQL Injection using Parameterized Queries / Prepared Statements.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-60',
    categoryId: 'cs',
    question: 'What is "Cross-Site Scripting" (XSS)?',
    answer: 'A security vulnerability where an attacker injects malicious client-side scripts into web pages viewed by other users',
    options: ['A security vulnerability where an attacker injects malicious client-side scripts into web pages viewed by other users', 'Stealing server source code via insecure FTP file uploads', 'Exploiting cross-origin resource sharing to delete database rows', 'Forging DNS records to redirect users to fake banking portals'],
    explanation: 'Allows attackers to steal session cookies, tokens, or deface websites. Mitigated by context-aware output encoding, sanitization, and Content Security Policy (CSP).',
    tip: 'XSS: Injecting malicious JavaScript into pages viewed by victims.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-61',
    categoryId: 'cs',
    question: 'What is "Cross-Site Request Forgery" (CSRF)?',
    answer: 'An attack that tricks an authenticated victim into executing unwanted actions on a trusted web application without their consent',
    options: ['An attack that tricks an authenticated victim into executing unwanted actions on a trusted web application without their consent', 'Brute-forcing user passwords using rainbow hash tables', 'Intercepting Wi-Fi radio traffic using rogue access points', 'Overwriting memory buffers using invalid memory pointers'],
    explanation: 'Exploits the browser\'s automatic inclusion of session cookies with cross-site requests. Prevented using anti-CSRF tokens and SameSite cookie attributes.',
    tip: 'CSRF: Tricking authenticated browser into making unauthorized requests.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-62',
    categoryId: 'cs',
    question: 'What is the purpose of "Salting" passwords before hashing?',
    answer: 'Appending a unique random string to each password to defend against Rainbow Table attacks and prevent identical hashes for identical passwords',
    options: ['Appending a unique random string to each password to defend against Rainbow Table attacks and prevent identical hashes for identical passwords', 'Encrypting the database storage disk with AES-256', 'Shortening long user passwords to fit 32-bit registers', 'Verifying user email addresses before account activation'],
    explanation: 'Without salt, two users with password "password123" produce identical hashes, vulnerable to precomputed lookup tables (rainbow tables).',
    tip: 'Salt = Unique random bytes added to password before hashing (stops rainbow tables).',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-63',
    categoryId: 'cs',
    question: 'What is a "Garbage Collector" (GC) in managed programming languages (like Java, Go, JS)?',
    answer: 'An automatic memory management mechanism that detects and reclaims heap memory allocated to objects no longer referenced by the program',
    options: ['An automatic memory management mechanism that detects and reclaims heap memory allocated to objects no longer referenced by the program', 'A utility that cleans temporary system files from secondary storage', 'A compiler pass that deletes unused variable declarations', 'An antivirus process that scans memory for trojan malware'],
    explanation: 'Uses algorithms like Tracing Mark-and-Sweep, Generational GC, or Reference Counting to prevent manual memory leaks without explicit free() calls.',
    tip: 'Garbage Collector: Automatically reclaims unused heap memory.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-64',
    categoryId: 'cs',
    question: 'What is a "Memory Leak"?',
    answer: 'When a program allocates memory on the heap but fails to release it when no longer needed, causing memory usage to grow continuously',
    options: ['When a program allocates memory on the heap but fails to release it when no longer needed, causing memory usage to grow continuously', 'When physical RAM sticks fail due to electrical power surges', 'When unauthorized users download sensitive database records', 'When CPU cache lines are overwritten by competing threads'],
    explanation: 'Eventually exhausts available system memory, causing out-of-memory (OOM) crashes or extreme paging slowdowns.',
    tip: 'Memory leak: Allocated memory is forgotten and never reclaimed.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-65',
    categoryId: 'cs',
    question: 'What is the difference between "Stack" and "Heap" memory allocation in an operating system process?',
    answer: 'Stack is fast, contiguous, LIFO memory managed automatically for function call frames; Heap is flexible dynamic memory allocated and managed manually or by GC',
    options: ['Stack is fast, contiguous, LIFO memory managed automatically for function call frames; Heap is flexible dynamic memory allocated and managed manually or by GC', 'Stack is stored on secondary disk; Heap is stored in CPU registers', 'Stack is accessible across all threads; Heap is private to a single function', 'Stack is allocated dynamically at runtime; Heap is fixed at compile time'],
    explanation: 'Stack holds local primitive variables and return addresses (fast pointer bump, limited size -> stack overflow). Heap holds dynamic objects with arbitrary lifetimes.',
    tip: 'Stack = Fast, automatic, function-scoped. Heap = Dynamic, flexible, larger.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-66',
    categoryId: 'cs',
    question: 'What is an "Abstract Syntax Tree" (AST) in compiler construction?',
    answer: 'A tree representation of the abstract syntactic structure of source code produced during parsing',
    options: ['A tree representation of the abstract syntactic structure of source code produced during parsing', 'A database schema describing class inheritance hierarchies', 'A network routing table for distributed cloud microservices', 'A visual flowchart diagram generated for documentation'],
    explanation: 'Compilers construct an AST from lexed tokens, then perform semantic analysis, optimization, and code generation from this tree.',
    tip: 'AST: Hierarchical tree representation of code syntax used by compilers.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-67',
    categoryId: 'cs',
    question: 'What is a "Lexer" (Lexical Analyzer / Tokenizer) in a compiler?',
    answer: 'The first phase of a compiler that converts raw source code text characters into a sequence of meaningful tokens',
    options: ['The first phase of a compiler that converts raw source code text characters into a sequence of meaningful tokens', 'The module that translates machine assembly code into binary opcodes', 'The optimizer that unrolls recursive loops and inlines functions', 'The linker that combines object files into executable binaries'],
    explanation: 'Converts stream of characters like "let x = 5;" into tokens: KEYWORD(let), IDENTIFIER(x), ASSIGN(=), NUMBER(5), SEMICOLON(;).',
    tip: 'Lexer converts text characters into tokens for the parser.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-68',
    categoryId: 'cs',
    question: 'What is a "Just-In-Time" (JIT) Compiler?',
    answer: 'A compiler that compiles bytecode into native machine code at runtime during execution to combine portability with native execution speed',
    options: ['A compiler that compiles bytecode into native machine code at runtime during execution to combine portability with native execution speed', 'A compiler that runs only when the user presses an execution button', 'A compiler that skips syntax verification to maximize build speed', 'A hardware accelerator that processes instructions ahead of clock cycles'],
    explanation: 'Used in modern runtimes (Java JVM, V8 JavaScript, .NET CLR): profiles running code, detects "hot spots", and compiles them to optimized machine code.',
    tip: 'JIT: Compiles bytecode to native machine code at runtime.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-69',
    categoryId: 'cs',
    question: 'What is the "Von Neumann Architecture" bottleneck?',
    answer: 'Data throughput throughput between the CPU and memory is limited compared to the processing speed of the CPU itself',
    options: ['Data throughput throughput between the CPU and memory is limited compared to the processing speed of the CPU itself', 'The inability of processors to execute floating-point numbers in parallel', 'The requirement that all programs must be written in assembly language', 'The physical heat dissipation limit of silicon semiconductors'],
    explanation: 'Because instructions and data share the same bus between memory and CPU, CPU idle wait time for memory transfers forms the primary architectural bottleneck.',
    tip: 'Von Neumann Bottleneck: CPU is much faster than the bus to memory.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-70',
    categoryId: 'cs',
    question: 'What is the difference between RISC and CISC processor architectures?',
    answer: 'RISC uses simple, fixed-length instructions executing in single cycles; CISC uses complex, variable-length instructions capable of multi-step operations',
    options: ['RISC uses simple, fixed-length instructions executing in single cycles; CISC uses complex, variable-length instructions capable of multi-step operations', 'RISC processors are strictly 32-bit; CISC processors are strictly 64-bit', 'RISC operates without registers; CISC relies exclusively on hardware stacks', 'CISC is used on mobile phones; RISC is used on enterprise desktop servers'],
    explanation: 'ARM and RISC-V are RISC (Reduced Instruction Set Computer, energy efficient). x86/x86-64 is CISC (Complex Instruction Set Computer).',
    tip: 'RISC = Reduced instructions (ARM). CISC = Complex instructions (x86).',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-71',
    categoryId: 'cs',
    question: 'What is an "Interrupt" in computer systems?',
    answer: 'A hardware or software signal emitted to the processor alerting it to an immediate event needing attention, pausing current execution',
    options: ['A hardware or software signal emitted to the processor alerting it to an immediate event needing attention, pausing current execution', 'A fatal syntax bug in the operating system kernel code', 'The deliberate unplugging of power supplies to test fault tolerance', 'A network packet dropped by an incoming firewall filter'],
    explanation: 'CPU saves current state and jumps to an Interrupt Service Routine (ISR) to handle the event (e.g. keyboard keystroke, disk I/O complete, timer tick).',
    tip: 'Interrupt pauses CPU to handle high-priority hardware/software events.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-72',
    categoryId: 'cs',
    question: 'What is a "System Call" (syscall)?',
    answer: 'The programmatic interface by which an application requests privileged services from the operating system kernel (user space to kernel space)',
    options: ['The programmatic interface by which an application requests privileged services from the operating system kernel (user space to kernel space)', 'A network RPC call between two cloud microservices', 'A recursive function call that exceeds stack limits', 'A telephone notification sent to system administrators during outages'],
    explanation: 'User applications cannot directly access hardware (disk, network, memory); they invoke syscalls (read, write, fork, open) to switch CPU to privileged kernel mode.',
    tip: 'Syscall: Bridge between unprivileged User Mode and privileged Kernel Mode.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-73',
    categoryId: 'cs',
    question: 'What does the POSIX "fork()" system call do in Unix/Linux?',
    answer: 'Creates a new child process by duplicating the calling parent process',
    options: ['Creates a new child process by duplicating the calling parent process', 'Splits a running thread into two separate CPU cores', 'Creates a new branch in a Git version control repository', 'Terminates an unresponsive application immediately'],
    explanation: 'Uses Copy-on-Write (CoW) memory optimization: returns 0 to the child process and the child\'s PID to the parent process.',
    tip: 'fork() duplicates the calling process into a parent and child.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-74',
    categoryId: 'cs',
    question: 'What does the "exec()" family of system calls do in Unix/Linux?',
    answer: 'Replaces the current process memory space, code, and data with a new executable program',
    options: ['Replaces the current process memory space, code, and data with a new executable program', 'Creates an exact duplicate process running in the background', 'Sends an asynchronous termination signal to a child process', 'Suspends execution until child processes exit'],
    explanation: 'Typically paired with fork(): fork() creates a child process, which then calls exec() to run a new binary (e.g. bash executing "ls").',
    tip: 'fork() clones the process; exec() replaces it with a new program.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-75',
    categoryId: 'cs',
    question: 'What is a "Zombie Process" in Unix/Linux?',
    answer: 'A terminated process whose exit status has not yet been read by its parent process via wait()',
    options: ['A terminated process whose exit status has not yet been read by its parent process via wait()', 'A malicious computer virus that infects multiple networked hosts', 'A process running with root administrative privileges in the background', 'A thread that executes indefinitely in an infinite while loop'],
    explanation: 'Remains in the process table as an entry with exit status and PID so the parent can inspect it. If parent never calls wait(), it stays a zombie.',
    tip: 'Zombie process: Dead process waiting for parent to read its exit code.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-76',
    categoryId: 'cs',
    question: 'What is an "Orphan Process"?',
    answer: 'A running process whose parent process has terminated, causing it to be adopted by the init / systemd process (PID 1)',
    options: ['A running process whose parent process has terminated, causing it to be adopted by the init / systemd process (PID 1)', 'A process that has lost all network connections', 'A database transaction whose parent query was rolled back', 'A thread that has been detached from its parent thread pool'],
    explanation: 'The operating system re-parents orphaned processes to init (PID 1), which automatically reaps their exit status when they terminate.',
    tip: 'Orphan process: Parent died; adopted by init (PID 1).',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-77',
    categoryId: 'cs',
    question: 'What is "Consistent Hashing" in distributed systems?',
    answer: 'A hashing technique where changing the number of server nodes requires remapping only k/n keys on average (using a hash ring)',
    options: ['A hashing technique where changing the number of server nodes requires remapping only k/n keys on average (using a hash ring)', 'A cryptographic hash that produces identical digests across all languages', 'A database index that validates table foreign key constraints', 'An algorithm that ensures hash values are always positive integers'],
    explanation: 'Unlike traditional hash(key) % N (which remaps almost all keys when N changes), consistent hashing distributes keys along a circular ring, minimizing cache invalidation.',
    tip: 'Consistent Hashing: Adding/removing nodes remaps minimal keys (Hash Ring).',
    difficulty: 'advanced'
  },
  {
    id: 'cs-78',
    categoryId: 'cs',
    question: 'What is a "Bloom Filter"?',
    answer: 'A space-efficient probabilistic data structure used to test set membership that can yield false positives but NEVER false negatives',
    options: ['A space-efficient probabilistic data structure used to test set membership that can yield false positives but NEVER false negatives', 'A data structure that guarantees 100% exact set intersection with zero error', 'A sorting algorithm that filters out duplicate numbers in linear time', 'A tree used for full-text semantic document indexing'],
    explanation: 'Answers: "Definitely not in set" (100% guaranteed) or "Possibly in set". Used in databases (Cassandra, Bigtable) to avoid expensive disk lookups for non-existent keys.',
    tip: 'Bloom Filter: No false negatives, but possible false positives.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-79',
    categoryId: 'cs',
    question: 'What is the "Raft" consensus algorithm designed for?',
    answer: 'Achieving distributed state machine consensus with an understandable leader-election and log-replication design (alternative to Paxos)',
    options: ['Achieving distributed state machine consensus with an understandable leader-election and log-replication design (alternative to Paxos)', 'Routing network packets along shortest paths in mobile ad-hoc networks', 'Balancing web server traffic across multiple reverse proxies', 'Compressing video streaming data using neural autoencoders'],
    explanation: 'Widely used in production distributed systems (etcd, Kubernetes, CockroachDB) to maintain replicated fault-tolerant consensus.',
    tip: 'Raft: Understandable distributed consensus (Leader election + Log replication).',
    difficulty: 'advanced'
  },
  {
    id: 'cs-80',
    categoryId: 'cs',
    question: 'What is the "Paxos" consensus algorithm?',
    answer: 'A foundational family of protocols for reaching consensus among a network of unreliable nodes in asynchronous distributed systems',
    options: ['A foundational family of protocols for reaching consensus among a network of unreliable nodes in asynchronous distributed systems', 'A peer-to-peer file sharing protocol designed for encrypted torrents', 'A symmetric stream cipher used in mobile cellular networks', 'A relational database query optimizer developed by IBM'],
    explanation: 'Developed by Leslie Lamport: mathematically proved that a distributed cluster can agree on values despite message delays and node crashes (Chubby, Spanner).',
    tip: 'Paxos: The foundational distributed consensus protocol (Lamport).',
    difficulty: 'advanced'
  },
  {
    id: 'cs-81',
    categoryId: 'cs',
    question: 'What is a "Load Balancer" and what does it do in system design?',
    answer: 'A reverse proxy that distributes incoming network traffic across multiple backend servers to ensure high availability and responsiveness',
    options: ['A reverse proxy that distributes incoming network traffic across multiple backend servers to ensure high availability and responsiveness', 'A hardware transformer that balances electrical voltage across server racks', 'A database trigger that recalculates account balances after each deposit', 'A compiler thread optimizer that balances register allocations'],
    explanation: 'Uses algorithms like Round Robin, Least Connections, or IP Hash to prevent server overload and route around dead nodes.',
    tip: 'Load Balancer distributes client traffic across server pools.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-82',
    categoryId: 'cs',
    question: 'What is "Horizontal Scaling" (Scale Out) versus "Vertical Scaling" (Scale Up)?',
    answer: 'Horizontal adds more machines/nodes to the pool; Vertical adds more resources (CPU, RAM) to a single existing machine',
    options: ['Horizontal adds more machines/nodes to the pool; Vertical adds more resources (CPU, RAM) to a single existing machine', 'Horizontal scales across physical geography; Vertical scales across timezones', 'Horizontal applies to software code; Vertical applies to network cables', 'Horizontal is used for mobile apps; Vertical is used for desktop apps'],
    explanation: 'Vertical scaling has hardware limits and single points of failure. Horizontal scaling provides near-infinite scale but introduces distributed system complexity.',
    tip: 'Scale Up = Bigger machine. Scale Out = More machines.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-83',
    categoryId: 'cs',
    question: 'What is a "Content Delivery Network" (CDN)?',
    answer: 'A geographically distributed network of proxy edge servers that cache content close to end users to reduce latency',
    options: ['A geographically distributed network of proxy edge servers that cache content close to end users to reduce latency', 'A private database storing streaming video copyright licenses', 'A television broadcast satellite network orbiting Earth', 'A centralized web server hosted in an enterprise datacenter'],
    explanation: 'CDNs (Cloudflare, Akamai) serve static assets (images, CSS, JS, video) from edge locations worldwide, decreasing origin server load and ping times.',
    tip: 'CDN: Caches content at edge servers geographically close to users.',
    difficulty: 'beginner'
  },
  {
    id: 'cs-84',
    categoryId: 'cs',
    question: 'What is a "Message Queue" (e.g. RabbitMQ, Apache Kafka) used for in system architecture?',
    answer: 'Asynchronous communication and decoupling between producer and consumer services, buffering work during traffic spikes',
    options: ['Asynchronous communication and decoupling between producer and consumer services, buffering work during traffic spikes', 'Synchronous database transactions that lock relational tables', 'A visual user interface for monitoring server hardware statistics', 'A network firewall protocol that inspects packet headers'],
    explanation: 'Allows producers to emit events without waiting for consumers to finish, smoothing out traffic bursts and enabling independent scaling.',
    tip: 'Message Queue = Asynchronous decoupling and load leveling.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-85',
    categoryId: 'cs',
    question: 'What is "Idempotence" in API design (e.g. HTTP GET, PUT, DELETE)?',
    answer: 'Making multiple identical requests produces the exact same server state as making a single request',
    options: ['Making multiple identical requests produces the exact same server state as making a single request', 'An API endpoint that responds in under 10 milliseconds', 'An endpoint that accepts only encrypted JSON payloads', 'A request that requires two-factor authentication tokens'],
    explanation: 'GET, PUT, and DELETE are idempotent (calling DELETE /user/1 multiple times has the same outcome). POST is non-idempotent (calling it 5 times creates 5 records).',
    tip: 'Idempotent: f(f(x)) = f(x). Multiple identical calls have the same effect as one.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-86',
    categoryId: 'cs',
    question: 'What is the purpose of "Database Sharding"?',
    answer: 'Horizontally partitioning a database so that different subsets of rows are stored across separate physical server instances',
    options: ['Horizontally partitioning a database so that different subsets of rows are stored across separate physical server instances', 'Replicating identical data copies to multiple read-only replicas', 'Creating automated daily backup archives of SQL tables', 'Encrypting database columns containing sensitive personal data'],
    explanation: 'Enables databases to exceed the storage, memory, and write throughput limits of any single physical machine by distributing records using a shard key.',
    tip: 'Sharding = Horizontal partitioning of rows across multiple database servers.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-87',
    categoryId: 'cs',
    question: 'What is a "Write-Ahead Log" (WAL) in database storage engines?',
    answer: 'An append-only log on disk where changes are recorded before being applied to main database tables, ensuring durability and recovery',
    options: ['An append-only log on disk where changes are recorded before being applied to main database tables, ensuring durability and recovery', 'A real-time monitor displaying active SQL connection queries', 'A log file that records user login attempts for security auditing', 'A memory buffer storing cached read query results'],
    explanation: 'If the server crashes mid-transaction, the engine replays the WAL on reboot to restore unwritten changes (ensuring ACID Durability).',
    tip: 'WAL: Write to log first on disk, then update database files (crash recovery).',
    difficulty: 'advanced'
  },
  {
    id: 'cs-88',
    categoryId: 'cs',
    question: 'What is the "MapReduce" computational model (Dean and Ghemawat)?',
    answer: 'A programming model for processing vast datasets in parallel using a Map function (filtering/sorting) and a Reduce function (aggregation)',
    options: ['A programming model for processing vast datasets in parallel using a Map function (filtering/sorting) and a Reduce function (aggregation)', 'A geographic mapping algorithm used in GPS satellite navigation', 'A database indexing technique for spatial polygon searches', 'A memory reduction algorithm for embedded microcontrollers'],
    explanation: 'Popularized by Google and Hadoop: fault-tolerant, scales across thousands of commodity machines by distributing computation to the data.',
    tip: 'MapReduce: Distribute computation across clusters via Map and Reduce.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-89',
    categoryId: 'cs',
    question: 'What is a "Finite State Machine" (FSM / Automaton)?',
    answer: 'A mathematical model of computation that can be in exactly one of a finite number of states at any given time, transitioning based on inputs',
    options: ['A mathematical model of computation that can be in exactly one of a finite number of states at any given time, transitioning based on inputs', 'A computer hardware chip that has a finite physical lifespan', 'A database that accepts only a fixed number of SQL queries', 'A network connection that closes automatically after 60 seconds'],
    explanation: 'Used in regex engines, compiler lexers, game AI, network protocols (TCP state machine), and embedded vending machines.',
    tip: 'FSM: Finite states, inputs trigger transitions (Turnstiles, Regex).',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-90',
    categoryId: 'cs',
    question: 'What is the difference between a Deterministic Finite Automaton (DFA) and a Non-deterministic Finite Automaton (NFA)?',
    answer: 'In a DFA, each state has exactly one transition for each input; in an NFA, a state can have multiple transitions (or epsilon transitions) for an input',
    options: ['In a DFA, each state has exactly one transition for each input; in an NFA, a state can have multiple transitions (or epsilon transitions) for an input', 'DFAs can recognize more languages than NFAs', 'NFAs cannot be converted into DFAs', 'DFAs require quantum processors to execute transitions'],
    explanation: 'By the Powerset Construction algorithm, every NFA can be converted into an equivalent DFA; both recognize the exact same class of Regular Languages.',
    tip: 'DFA = 1 deterministic path per symbol. NFA = Multiple paths / epsilon jumps.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-91',
    categoryId: 'cs',
    question: 'What is the "Chomsky Hierarchy" of formal grammars and languages?',
    answer: 'A hierarchy of four language classes: Regular (Type 3) -> Context-Free (Type 2) -> Context-Sensitive (Type 1) -> Recursively Enumerable (Type 0)',
    options: ['A hierarchy of four language classes: Regular (Type 3) -> Context-Free (Type 2) -> Context-Sensitive (Type 1) -> Recursively Enumerable (Type 0)', 'A classification of programming languages by execution speed', 'A hierarchy of network protocols from physical wires to application layer', 'A ranking of software engineering patterns from singleton to factory'],
    explanation: 'Formulated by Noam Chomsky: Regular (recognized by Finite Automata), Context-Free (Pushdown Automata / parsers), Recursively Enumerable (Turing Machines).',
    tip: 'Chomsky Hierarchy: Regular -> Context-Free -> Context-Sensitive -> Turing.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-92',
    categoryId: 'cs',
    question: 'Why can standard Regular Expressions (RegEx) not match arbitrary nested balanced parentheses?',
    answer: 'Because regular languages cannot count arbitrary depth; counting nested structures requires a Context-Free Grammar (Pushdown Automaton with a stack)',
    options: ['Because regular languages cannot count arbitrary depth; counting nested structures requires a Context-Free Grammar (Pushdown Automaton with a stack)', 'Because regular expressions can only process ASCII characters', 'Because parentheses are reserved operators in regular expression syntax', 'Because modern computer memory cannot store open parenthesis tokens'],
    explanation: 'Proven by the Pumping Lemma for Regular Languages: finite automata have finite states and cannot remember an arbitrary number of open brackets.',
    tip: 'Pumping Lemma: Regex cannot parse arbitrary nested parentheses; requires a stack.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-93',
    categoryId: 'cs',
    question: 'What is a "Deadlock" versus a "Livelock"?',
    answer: 'In deadlock, threads are permanently blocked waiting for resources; in livelock, threads actively change state in response to each other without making progress',
    options: ['In deadlock, threads are permanently blocked waiting for resources; in livelock, threads actively change state in response to each other without making progress', 'Deadlock happens in hardware; livelock happens in software', 'Livelock is intentional synchronization; deadlock is an accidental bug', 'Deadlock uses 100% CPU; livelock uses 0% CPU'],
    explanation: 'Two people in a hallway trying to pass each other: deadlock is stopping and staring; livelock is repeatedly stepping left and right simultaneously forever.',
    tip: 'Deadlock = Frozen waiting. Livelock = Active state-switching but zero progress.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-94',
    categoryId: 'cs',
    question: 'What is "Starvation" in CPU scheduling or concurrent resource allocation?',
    answer: 'A perpetual condition where a runnable thread is continuously denied access to a necessary resource or CPU time by higher-priority tasks',
    options: ['A perpetual condition where a runnable thread is continuously denied access to a necessary resource or CPU time by higher-priority tasks', 'When a computer system runs out of physical memory pages', 'When a hard disk drive has zero remaining unallocated sectors', 'When an algorithm encounters an unhandled division by zero exception'],
    explanation: 'Prevented by "aging" techniques: gradually increasing the priority of long-waiting tasks so they eventually execute.',
    tip: 'Starvation: Low-priority task never gets CPU time (fixed by aging).',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-95',
    categoryId: 'cs',
    question: 'What is the "Dining Philosophers Problem" designed to illustrate?',
    answer: 'Synchronization challenges, resource allocation contention, and deadlock avoidance in concurrent systems',
    options: ['Synchronization challenges, resource allocation contention, and deadlock avoidance in concurrent systems', 'The history of philosophical logic in artificial intelligence', 'Optimizing food distribution networks using linear programming', 'A theoretical proof showing that Turing machines cannot feel consciousness'],
    explanation: 'Introduced by Dijkstra: 5 philosophers share 5 chopsticks between them. If all grab their left chopstick simultaneously, circular wait deadlock occurs.',
    tip: 'Dining Philosophers: Classic illustration of deadlock and resource contention.',
    difficulty: 'intermediate'
  },
  {
    id: 'cs-96',
    categoryId: 'cs',
    question: 'What is the "Heartbleed" vulnerability in OpenSSL (CVE-2014-0160)?',
    answer: 'A buffer over-read bug in the TLS Heartbeat extension that allowed remote attackers to read unallocated server memory, leaking private keys',
    options: ['A buffer over-read bug in the TLS Heartbeat extension that allowed remote attackers to read unallocated server memory, leaking private keys', 'A hardware flaw in Intel CPU speculative branch prediction execution', 'A distributed denial of service attack overwhelming SSL root authority servers', 'A brute-force mathematical attack that factored 2048-bit RSA keys'],
    explanation: 'The server trusted the client\'s payload length field without checking actual payload size, reading up to 64KB of adjacent process RAM back to the attacker.',
    tip: 'Heartbleed = Buffer over-read leaking sensitive memory in OpenSSL.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-97',
    categoryId: 'cs',
    question: 'What are the "Meltdown" and "Spectre" hardware vulnerabilities discovered in modern CPUs?',
    answer: 'Hardware security vulnerabilities that exploit Speculative Execution and Branch Prediction side-channels to read protected kernel memory',
    options: ['Hardware security vulnerabilities that exploit Speculative Execution and Branch Prediction side-channels to read protected kernel memory', 'Physical overheating of microprocessors under heavy matrix calculation workloads', 'Flaws in modern cryptographic hardware random number generators', 'Software viruses that overwrite basic input/output system (BIOS) firmware'],
    explanation: 'Processors speculatively execute instructions past security boundaries; while results are rolled back, microarchitectural cache state leaks secrets via timing analysis.',
    tip: 'Meltdown & Spectre: Speculative execution side-channel attacks on CPU cache.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-98',
    categoryId: 'cs',
    question: 'What is the difference between Synchronous and Asynchronous I/O?',
    answer: 'Synchronous I/O blocks the calling thread until the operation finishes; Asynchronous I/O returns immediately and notifies via callback, promise, or event loop',
    options: ['Synchronous I/O blocks the calling thread until the operation finishes; Asynchronous I/O returns immediately and notifies via callback, promise, or event loop', 'Synchronous I/O is used only over wireless networks; Asynchronous is wired', 'Synchronous I/O runs exclusively on GPU hardware cores', 'Asynchronous I/O can only read data, but cannot write data to disk'],
    explanation: 'Asynchronous I/O (Node.js libuv, Linux epoll, Windows IOCP) enables single-threaded or low-threaded servers to handle tens of thousands of concurrent connections (C10K problem).',
    tip: 'Sync = Blocks execution thread. Async = Non-blocking (events / callbacks).',
    difficulty: 'beginner'
  },
  {
    id: 'cs-99',
    categoryId: 'cs',
    question: 'What is the "C10K Problem" in web server architecture?',
    answer: 'The challenge of designing web server software capable of handling 10,000 concurrent client connections simultaneously on a single machine',
    options: ['The challenge of designing web server software capable of handling 10,000 concurrent client connections simultaneously on a single machine', 'The difficulty of indexing 10,000 columns in a single relational SQL table', 'A hardware limit where CPU temperatures exceed 10,000 millikelvin', 'The problem of securing 10,000 private keys in enterprise key stores'],
    explanation: 'Solves thread-per-connection bottlenecks by moving to event-driven, non-blocking asynchronous architectures (e.g. Nginx, Node.js, epoll).',
    tip: 'C10K Problem: Handling 10,000 concurrent connections via event-driven I/O.',
    difficulty: 'advanced'
  },
  {
    id: 'cs-100',
    categoryId: 'cs',
    question: 'What is the "CAP Theorem" trade-off in distributed systems when a network partition (P) occurs?',
    answer: 'The system must choose between Consistency (returning an error rather than stale data) or Availability (returning stale data to remain accessible)',
    options: ['The system must choose between Consistency (returning an error rather than stale data) or Availability (returning stale data to remain accessible)', 'The system must automatically delete all uncommitted database shards', 'The system must elect a single monarch server that dictates all operations', 'The system must convert all relational tables into unindexed JSON documents'],
    explanation: 'Network partitions will happen. CP systems (e.g. HBase, CockroachDB) preserve consistency by refusing writes if a node is cut off. AP systems (e.g. Cassandra, Dynamo) keep serving stale reads to stay up.',
    tip: 'Under network partition: Choose CP (consistent but may reject) or AP (available but may be stale).',
    difficulty: 'advanced'
  }
];
