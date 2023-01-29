import React from "react";
import NavBar from "../NavBar";

const Tags = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          margin: "30px auto",
          display: "flex",
          justifyContent: "center",

          flexWrap: "wrap",
        }}
        id="tags-browser"
        className="d-grid grid__4 lg:grid__3 md:grid__2 sm:grid__1 g12"
      >
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/javascript"
                className="post-tag"
                title="show questions tagged 'javascript'"
                aria-label="show questions tagged 'javascript'"
                rel="tag"
                aria-labelledby="javascript-container"
              >
                javascript
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            For questions about programming in ECMAScript (JavaScript/JS) and
            its different dialects/implementations (except for ActionScript).
            Keep in mind that JavaScript is NOT the same as Java! Include all
            la…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">2470662 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/javascript?sort=newest&amp;days=1"
                title="386 questions tagged javascript in the last 24 hours"
              >
                386 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/javascript?sort=newest&amp;days=7"
                title="3410 questions tagged javascript in the last 7 days"
              >
                3410 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/python"
                className="post-tag"
                title=""
                aria-label="show questions tagged 'python'"
                rel="tag"
                aria-labelledby="python-container"
              >
                python
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Python is a multi-paradigm, dynamically typed, multi-purpose
            programming language. It is designed to be quick to learn,
            understand, and use, and enforces a clean and uniform syntax. Please
            note that P…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">2097679 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/python?sort=newest&amp;days=1"
                title="500 questions tagged python in the last 24 hours"
              >
                500 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/python?sort=newest&amp;days=7"
                title="5004 questions tagged python in the last 7 days"
              >
                5004 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/java"
                className="post-tag"
                title=""
                aria-label="show questions tagged 'java'"
                rel="tag"
                aria-labelledby="java-container"
              >
                java
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Java is a high-level object-oriented programming language. Use this
            tag when you're having problems using or understanding the language
            itself. This tag is frequently used alongside other tags for lib…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">1885158 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/java?sort=newest&amp;days=1"
                title="198 questions tagged java in the last 24 hours"
              >
                198 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/java?sort=newest&amp;days=7"
                title="1691 questions tagged java in the last 7 days"
              >
                1691 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/c%23"
                className="post-tag"
                title="show questions tagged 'c#'"
                aria-label="show questions tagged 'c#'"
                rel="tag"
                aria-labelledby="c#-container"
              >
                c#
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            C# (pronounced "see sharp") is a high-level, statically typed,
            multi-paradigm programming language developed by Microsoft. C# code
            usually targets Microsoft's .NET family of tools and run-times,
            which…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">1579022 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/c%23?sort=newest&amp;days=1"
                title="112 questions tagged c# in the last 24 hours"
              >
                112 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/c%23?sort=newest&amp;days=7"
                title="1414 questions tagged c# in the last 7 days"
              >
                1414 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/php"
                className="post-tag"
                title="show questions tagged 'php'"
                aria-label="show questions tagged 'php'"
                rel="tag"
                aria-labelledby="php-container"
              >
                php
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            PHP is a widely used, open source, general-purpose, multi-paradigm,
            dynamically typed and interpreted scripting language designed
            initially for server-side web development. Use this tag for
            questions …
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">1454679 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/php?sort=newest&amp;days=1"
                title="115 questions tagged php in the last 24 hours"
              >
                115 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/php?sort=newest&amp;days=7"
                title="1046 questions tagged php in the last 7 days"
              >
                1046 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/android"
                className="post-tag"
                title="show questions tagged 'android'"
                aria-label="show questions tagged 'android'"
                rel="tag"
                aria-labelledby="android-container"
              >
                android
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Android is Google's mobile operating system, used for programming or
            developing digital devices (Smartphones, Tablets, Automobiles, TVs,
            Wear, Glass, IoT). For topics related to Android, use Android-s…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">1397311 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/android?sort=newest&amp;days=1"
                title="130 questions tagged android in the last 24 hours"
              >
                130 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/android?sort=newest&amp;days=7"
                title="1034 questions tagged android in the last 7 days"
              >
                1034 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/html"
                className="post-tag"
                title="show questions tagged 'html'"
                aria-label="show questions tagged 'html'"
                rel="tag"
                aria-labelledby="html-container"
              >
                html
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            HTML (HyperText Markup Language) is the markup language for creating
            web pages and other information to be displayed in a web browser.
            Questions regarding HTML should include a minimal reproducible ex…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">1162498 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/html?sort=newest&amp;days=1"
                title="167 questions tagged html in the last 24 hours"
              >
                167 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/html?sort=newest&amp;days=7"
                title="1365 questions tagged html in the last 7 days"
              >
                1365 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/jquery"
                className="post-tag"
                title="show questions tagged 'jquery'"
                aria-label="show questions tagged 'jquery'"
                rel="tag"
                aria-labelledby="jquery-container"
              >
                jquery
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            jQuery is a JavaScript library. Consider also adding the JavaScript
            tag. jQuery is a popular cross-browser JavaScript library that
            facilitates Document Object Model (DOM) traversal, event handling…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">1032494 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/jquery?sort=newest&amp;days=1"
                title="28 questions tagged jquery in the last 24 hours"
              >
                28 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/jquery?sort=newest&amp;days=7"
                title="328 questions tagged jquery in the last 7 days"
              >
                328 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/c%2b%2b"
                className="post-tag"
                title="show questions tagged 'c++'"
                aria-label="show questions tagged 'c++'"
                rel="tag"
                aria-labelledby="c++-container"
              >
                c++
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            C++ is a general-purpose programming language. Initially, it was
            designed as an extension to C and has a similar syntax, but it is
            now a completely different language. Use this tag for questions
            about…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">787452 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/c%2b%2b?sort=newest&amp;days=1"
                title="95 questions tagged c++ in the last 24 hours"
              >
                95 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/c%2b%2b?sort=newest&amp;days=7"
                title="779 questions tagged c++ in the last 7 days"
              >
                779 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/css"
                className="post-tag"
                title="show questions tagged 'css'"
                aria-label="show questions tagged 'css'"
                rel="tag"
                aria-labelledby="css-container"
              >
                css
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            CSS (Cascading Style Sheets) is a representation style sheet
            language used for describing the look and formatting of HTML
            (HyperText Markup Language), XML (Extensible Markup Language)
            documents and SV…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">784256 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/css?sort=newest&amp;days=1"
                title="125 questions tagged css in the last 24 hours"
              >
                125 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/css?sort=newest&amp;days=7"
                title="1000 questions tagged css in the last 7 days"
              >
                1000 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/ios"
                className="post-tag"
                title="show questions tagged 'ios'"
                aria-label="show questions tagged 'ios'"
                rel="tag"
                aria-labelledby="ios-container"
              >
                ios
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            iOS is the mobile operating system running on the Apple iPhone, iPod
            touch, and iPad. Use this tag [ios] for questions related to
            programming on the iOS platform. Use the related tags [objective-c]
            an…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">678649 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/ios?sort=newest&amp;days=1"
                title="34 questions tagged ios in the last 24 hours"
              >
                34 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/ios?sort=newest&amp;days=7"
                title="379 questions tagged ios in the last 7 days"
              >
                379 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/mysql"
                className="post-tag"
                title="show questions tagged 'mysql'"
                aria-label="show questions tagged 'mysql'"
                rel="tag"
                aria-labelledby="mysql-container"
              >
                mysql
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            MySQL is a free, open-source Relational Database Management System
            (RDBMS) that uses Structured Query Language (SQL). DO NOT USE this
            tag for other DBs such as SQL Server, SQLite etc. Those are diff…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">657104 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/mysql?sort=newest&amp;days=1"
                title="47 questions tagged mysql in the last 24 hours"
              >
                47 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/mysql?sort=newest&amp;days=7"
                title="483 questions tagged mysql in the last 7 days"
              >
                483 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/sql"
                className="post-tag"
                title="show questions tagged 'sql'"
                aria-label="show questions tagged 'sql'"
                rel="tag"
                aria-labelledby="sql-container"
              >
                sql
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Structured Query Language (SQL) is a language for querying
            databases. Questions should include code examples, table structure,
            sample data, and a tag for the DBMS implementation (e.g. MySQL,
            PostgreSQ…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">654364 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/sql?sort=newest&amp;days=1"
                title="63 questions tagged sql in the last 24 hours"
              >
                63 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/sql?sort=newest&amp;days=7"
                title="780 questions tagged sql in the last 7 days"
              >
                780 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/r"
                className="post-tag"
                title="show questions tagged 'r'"
                aria-label="show questions tagged 'r'"
                rel="tag"
                aria-labelledby="r-container"
              >
                r
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            R is a free, open-source programming language &amp; software
            environment for statistical computing, bioinformatics, visualization
            &amp; general computing. Please use minimal reproducible examples
            others can …
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">479143 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/r?sort=newest&amp;days=1"
                title="78 questions tagged r in the last 24 hours"
              >
                78 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/r?sort=newest&amp;days=7"
                title="1020 questions tagged r in the last 7 days"
              >
                1020 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/node.js"
                className="post-tag"
                title="show questions tagged 'node.js'"
                aria-label="show questions tagged 'node.js'"
                rel="tag"
                aria-labelledby="node.js-container"
              >
                node.js
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Node.js is an event-based, non-blocking, asynchronous I/O runtime
            that uses Google's V8 JavaScript engine and libuv library. It is
            used for developing applications that make heavy use of the ability
            t…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">455312 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/node.js?sort=newest&amp;days=1"
                title="107 questions tagged node.js in the last 24 hours"
              >
                107 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/node.js?sort=newest&amp;days=7"
                title="993 questions tagged node.js in the last 7 days"
              >
                993 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/reactjs"
                className="post-tag"
                title="show questions tagged 'reactjs'"
                aria-label="show questions tagged 'reactjs'"
                rel="tag"
                aria-labelledby="reactjs-container"
              >
                reactjs
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            React is a JavaScript library for building user interfaces. It uses
            a declarative, component-based paradigm and aims to be efficient and
            flexible.
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">440719 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/reactjs?sort=newest&amp;days=1"
                title="201 questions tagged reactjs in the last 24 hours"
              >
                201 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/reactjs?sort=newest&amp;days=7"
                title="1873 questions tagged reactjs in the last 7 days"
              >
                1873 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/arrays"
                className="post-tag"
                title="show questions tagged 'arrays'"
                aria-label="show questions tagged 'arrays'"
                rel="tag"
                aria-labelledby="arrays-container"
              >
                arrays
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            An array is an ordered linear data structure consisting of a
            collection of elements (values, variables, or references), each
            identified by one or more indexes. When asking about specific
            variants of a…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">406464 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/arrays?sort=newest&amp;days=1"
                title="53 questions tagged arrays in the last 24 hours"
              >
                53 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/arrays?sort=newest&amp;days=7"
                title="466 questions tagged arrays in the last 7 days"
              >
                466 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/c"
                className="post-tag"
                title="show questions tagged 'c'"
                aria-label="show questions tagged 'c'"
                rel="tag"
                aria-labelledby="c-container"
              >
                c
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            C is a general-purpose programming language used for system
            programming (OS and embedded), libraries, games and cross-platform.
            This tag should be used with general questions concerning the C
            language…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">392479 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/c?sort=newest&amp;days=1"
                title="51 questions tagged c in the last 24 hours"
              >
                51 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/c?sort=newest&amp;days=7"
                title="429 questions tagged c in the last 7 days"
              >
                429 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/asp.net"
                className="post-tag"
                title="show questions tagged 'asp.net'"
                aria-label="show questions tagged 'asp.net'"
                rel="tag"
                aria-labelledby="asp.net-container"
              >
                asp.net
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            ASP.NET is a Microsoft web application development framework that
            allows programmers to build dynamic web sites, web applications and
            web services. It is useful to use this tag in conjunction with the…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">371951 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/asp.net?sort=newest&amp;days=1"
                title="19 questions tagged asp.net in the last 24 hours"
              >
                19 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/asp.net?sort=newest&amp;days=7"
                title="188 questions tagged asp.net in the last 7 days"
              >
                188 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/json"
                className="post-tag"
                title="show questions tagged 'json'"
                aria-label="show questions tagged 'json'"
                rel="tag"
                aria-labelledby="json-container"
              >
                json
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            JSON (JavaScript Object Notation) is a serializable data interchange
            format that is a machine and human readable. Do not use this tag for
            native JavaScript objects or JavaScript object literals. Befor…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">352622 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/json?sort=newest&amp;days=1"
                title="40 questions tagged json in the last 24 hours"
              >
                40 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/json?sort=newest&amp;days=7"
                title="462 questions tagged json in the last 7 days"
              >
                462 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/ruby-on-rails"
                className="post-tag"
                title="show questions tagged 'ruby-on-rails'"
                aria-label="show questions tagged 'ruby-on-rails'"
                rel="tag"
                aria-labelledby="ruby-on-rails-container"
              >
                ruby-on-rails
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Ruby on Rails is an open source full-stack web application framework
            written in Ruby. It follows the popular MVC framework model and is
            known for its "convention over configuration" approach to applic…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">335917 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/ruby-on-rails?sort=newest&amp;days=1"
                title="11 questions tagged ruby-on-rails in the last 24 hours"
              >
                11 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/ruby-on-rails?sort=newest&amp;days=7"
                title="143 questions tagged ruby-on-rails in the last 7 days"
              >
                143 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/python-3.x"
                className="post-tag"
                title="show questions tagged 'python-3.x'"
                aria-label="show questions tagged 'python-3.x'"
                rel="tag"
                aria-labelledby="python-3.x-container"
              >
                python-3.x
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            DO NOT USE UNLESS YOUR QUESTION IS FOR PYTHON 3 ONLY. Always use
            alongside the standard [python] tag.
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">332768 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/python-3.x?sort=newest&amp;days=1"
                title="87 questions tagged python-3.x in the last 24 hours"
              >
                87 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/python-3.x?sort=newest&amp;days=7"
                title="722 questions tagged python-3.x in the last 7 days"
              >
                722 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/.net"
                className="post-tag"
                title="show questions tagged '.net'"
                aria-label="show questions tagged '.net'"
                rel="tag"
                aria-labelledby=".net-container"
              >
                .net
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Do NOT use for questions about .NET Core - use [.net-core] instead.
            The .NET framework is a software framework designed mainly for the
            Microsoft Windows operating system. It includes an implementation…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">328204 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/.net?sort=newest&amp;days=1"
                title="20 questions tagged .net in the last 24 hours"
              >
                20 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/.net?sort=newest&amp;days=7"
                title="339 questions tagged .net in the last 7 days"
              >
                339 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/sql-server"
                className="post-tag"
                title="show questions tagged 'sql-server'"
                aria-label="show questions tagged 'sql-server'"
                rel="tag"
                aria-labelledby="sql-server-container"
              >
                sql-server
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Microsoft SQL Server is a relational database management system
            (RDBMS). Use this tag for all Microsoft SQL Server editions
            including Compact, Express, Azure, Fast-track, APS (formerly PDW)
            and Azure …
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">327102 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/sql-server?sort=newest&amp;days=1"
                title="23 questions tagged sql-server in the last 24 hours"
              >
                23 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/sql-server?sort=newest&amp;days=7"
                title="351 questions tagged sql-server in the last 7 days"
              >
                351 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/swift"
                className="post-tag"
                title="show questions tagged 'swift'"
                aria-label="show questions tagged 'swift'"
                rel="tag"
                aria-labelledby="swift-container"
              >
                swift
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Swift is a general-purpose programming language developed by Apple
            Inc first released in 2014 for its platforms and Linux. Swift is
            open-source. Use the tag only for questions about language features
            …
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">324002 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/swift?sort=newest&amp;days=1"
                title="35 questions tagged swift in the last 24 hours"
              >
                35 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/swift?sort=newest&amp;days=7"
                title="378 questions tagged swift in the last 7 days"
              >
                378 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/django"
                className="post-tag"
                title="show questions tagged 'django'"
                aria-label="show questions tagged 'django'"
                rel="tag"
                aria-labelledby="django-container"
              >
                django
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Django is an open-source server-side web application framework
            written in Python. It is designed to reduce the effort required to
            create complex data-driven websites and web applications, with a
            speci…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">303736 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/django?sort=newest&amp;days=1"
                title="46 questions tagged django in the last 24 hours"
              >
                46 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/django?sort=newest&amp;days=7"
                title="515 questions tagged django in the last 7 days"
              >
                515 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/objective-c"
                className="post-tag"
                title="show questions tagged 'objective-c'"
                aria-label="show questions tagged 'objective-c'"
                rel="tag"
                aria-labelledby="objective-c-container"
              >
                objective-c
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            should be used only on questions that are about Objective-C features
            or depend on code in the language. The tags [cocoa] and
            [cocoa-touch] should be used to ask about Apple's frameworks or cl…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">292628 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/objective-c?sort=newest&amp;days=7"
                title="27 questions tagged objective-c in the last 7 days"
              >
                27 asked this week
              </a>
              ,{" "}
              <a
                href="/questions/tagged/objective-c?sort=newest&amp;days=30"
                title="90 questions tagged objective-c in the last 30 days"
              >
                90 this month
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/angular"
                className="post-tag"
                title="show questions tagged 'angular'"
                aria-label="show questions tagged 'angular'"
                rel="tag"
                aria-labelledby="angular-container"
              >
                angular
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Questions about Angular (not to be confused with AngularJS), the web
            framework from Google. Use this tag for Angular questions which are
            not specific to an individual version. For the older AngularJS …
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">290942 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/angular?sort=newest&amp;days=1"
                title="47 questions tagged angular in the last 24 hours"
              >
                47 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/angular?sort=newest&amp;days=7"
                title="565 questions tagged angular in the last 7 days"
              >
                565 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/excel"
                className="post-tag"
                title="show questions tagged 'excel'"
                aria-label="show questions tagged 'excel'"
                rel="tag"
                aria-labelledby="excel-container"
              >
                excel
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Only for questions on programming against Excel objects or files, or
            formula development. You may combine the Excel tag with VBA, VSTO,
            C#, VB.NET, PowerShell, OLE automation, and other programming re…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">275283 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/excel?sort=newest&amp;days=1"
                title="41 questions tagged excel in the last 24 hours"
              >
                41 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/excel?sort=newest&amp;days=7"
                title="522 questions tagged excel in the last 7 days"
              >
                522 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/pandas"
                className="post-tag"
                title="show questions tagged 'pandas'"
                aria-label="show questions tagged 'pandas'"
                rel="tag"
                aria-labelledby="pandas-container"
              >
                pandas
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Pandas is a Python library for data manipulation and analysis, e.g.
            dataframes, multidimensional time series and cross-sectional
            datasets commonly found in statistics, experimental science results,
            ec…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">272787 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/pandas?sort=newest&amp;days=1"
                title="55 questions tagged pandas in the last 24 hours"
              >
                55 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/pandas?sort=newest&amp;days=7"
                title="709 questions tagged pandas in the last 7 days"
              >
                709 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/angularjs"
                className="post-tag"
                title="show questions tagged 'angularjs'"
                aria-label="show questions tagged 'angularjs'"
                rel="tag"
                aria-labelledby="angularjs-container"
              >
                angularjs
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Use for questions about AngularJS (1.x), the open-source JavaScript
            framework. Do NOT use this tag for Angular 2 or later versions;
            instead, use the [angular] tag.
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">262709 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/angularjs?sort=newest&amp;days=7"
                title="37 questions tagged angularjs in the last 7 days"
              >
                37 asked this week
              </a>
              ,{" "}
              <a
                href="/questions/tagged/angularjs?sort=newest&amp;days=30"
                title="135 questions tagged angularjs in the last 30 days"
              >
                135 this month
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/regex"
                className="post-tag"
                title="show questions tagged 'regex'"
                aria-label="show questions tagged 'regex'"
                rel="tag"
                aria-labelledby="regex-container"
              >
                regex
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Regular expressions provide a declarative language to match patterns
            within strings. They are commonly used for string validation,
            parsing, and transformation. Specify the language (PHP, Python, etc)
            …
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">256118 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/regex?sort=newest&amp;days=1"
                title="23 questions tagged regex in the last 24 hours"
              >
                23 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/regex?sort=newest&amp;days=7"
                title="254 questions tagged regex in the last 7 days"
              >
                254 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/ruby"
                className="post-tag"
                title="show questions tagged 'ruby'"
                aria-label="show questions tagged 'ruby'"
                rel="tag"
                aria-labelledby="ruby-container"
              >
                ruby
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            Ruby is a multi-platform open-source, dynamic object-oriented
            interpreted language. The [ruby] tag is for questions related to the
            Ruby language, including its syntax and its libraries. Ruby on Rails
            …
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">227156 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/ruby?sort=newest&amp;days=1"
                title="11 questions tagged ruby in the last 24 hours"
              >
                11 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/ruby?sort=newest&amp;days=7"
                title="106 questions tagged ruby in the last 7 days"
              >
                106 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/linux"
                className="post-tag"
                title="show questions tagged 'linux'"
                aria-label="show questions tagged 'linux'"
                rel="tag"
                aria-labelledby="linux-container"
              >
                linux
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            NOTICE: All Linux questions must be related to programming; those
            that aren't will be closed. Use this tag only if your question
            relates to programming using Linux APIs or Linux-specific behavior,
            …
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">222839 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/linux?sort=newest&amp;days=1"
                title="36 questions tagged linux in the last 24 hours"
              >
                36 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/linux?sort=newest&amp;days=7"
                title="378 questions tagged linux in the last 7 days"
              >
                378 this week
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/iphone"
                className="post-tag"
                title="show questions tagged 'iphone'"
                aria-label="show questions tagged 'iphone'"
                rel="tag"
                aria-labelledby="iphone-container"
              >
                iphone
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            unless you are addressing Apple's iPhone and/or iPod touch
            specifically. For questions not dependent on hardware, use the tag
            [ios]. More tags to consider are [xcode] (but only if …
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">221569 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/iphone?sort=newest&amp;days=7"
                title="28 questions tagged iphone in the last 7 days"
              >
                28 asked this week
              </a>
              ,{" "}
              <a
                href="/questions/tagged/iphone?sort=newest&amp;days=30"
                title="85 questions tagged iphone in the last 30 days"
              >
                85 this month
              </a>{" "}
            </div>
          </div>
        </div>
        <div
          style={{ width: "300px", border: "1px solid black", padding: "10px" }}
          className="grid--item s-card js-tag-cell d-flex fd-column"
        >
          <div className="d-flex jc-space-between ai-center mb12">
            <div className="flex--item">
              <a
                href="/questions/tagged/ajax"
                className="post-tag"
                title="show questions tagged 'ajax'"
                aria-label="show questions tagged 'ajax'"
                rel="tag"
                aria-labelledby="ajax-container"
              >
                ajax
              </a>
            </div>
          </div>

          <div className="flex--item fc-medium mb12 v-truncate4">
            AJAX (Asynchronous JavaScript and XML) is a technique for creating
            interactive website user interfaces without the traditional web page
            refresh or reload. It uses asynchronous data exchange between cl…
          </div>

          <div className="mt-auto d-flex jc-space-between fs-caption fc-black-400">
            <div className="flex--item">221404 questions</div>
            <div className="flex--item s-anchors s-anchors__inherit">
              {" "}
              <a
                href="/questions/tagged/ajax?sort=newest&amp;days=1"
                title="8 questions tagged ajax in the last 24 hours"
              >
                8 asked today
              </a>
              ,{" "}
              <a
                href="/questions/tagged/ajax?sort=newest&amp;days=7"
                title="86 questions tagged ajax in the last 7 days"
              >
                86 this week
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
