var numstories = 0;

function createStory(title, text) {
    var story = document.createElement("div");
    var heading = document.createElement("h3");
    var storyno = ++numstories;
    heading.innerHTML = "BD-" + storyno + ": " + title;

    var para = document.createElement("p");
    para.innerHTML = text;

    story.setAttribute("class", "story");
    story.appendChild(heading);
    story.appendChild(para);

    return story;
}

function createRelease(version, title) {
    var release = document.createElement("div");
    var heading = document.createElement("h3");
    heading.innerHTML = "Release " + version + ": " + title;

    release.setAttribute("class", "release");
    release.appendChild(heading);

    return release;
}

function promote(item, prev, next) {
    prev.removeChild(item);
    next.appendChild(item);
}

function updateBoard() {
    var backlog = document.getElementById("backlog");
    var selected = document.getElementById("selected");
    var progress = document.getElementById("progress");
    var done = document.getElementById("done");

    var createKanban =
        createStory(
            "Create Kanban", "Create a kanban for the blockchain demo");
    backlog.appendChild(createKanban);

    var pubfileReader =
        createStory(
            "Add Public Entity Reader to agentd",
            "The Public Entity Reader provides a safe way to import public " +
            "entities into agentd.");
    backlog.appendChild(pubfileReader);

    var privateKeyReader =
        createStory(
            "Add Private Key Reader to agentd",
            "The Private Key Reader provides a safe way to import the " +
            "private key into agentd.");
    backlog.appendChild(privateKeyReader);

    var improvedProtocolKeyImport =
        createStory(
            "Improved key import into protocol service",
            "This change improves the way we import keys into the protocol " +
            "service.");
    backlog.appendChild(improvedProtocolKeyImport);

    var canonizationKeyControlAPI =
        createStory(
            "Extend the canonization service control API with key import",
            "This change is the first step toward enabling signed blocks.");
    backlog.appendChild(canonizationKeyControlAPI);

    var improvedCanonizationKeyImport =
        createStory(
            "Improved key import into canonization service",
            "This change pushes keys to the canonization service from the " +
            "supervisor.");
    backlog.appendChild(improvedCanonizationKeyImport);

    var canonizationBlockSigning =
        createStory(
            "Enable block signing in the canonization service",
            "This change enables block signing and block chaining in the " +
            "canonization service.");
    backlog.appendChild(canonizationBlockSigning);

    var vcblockchainProtocol =
        createStory(
            "Add protocol support to vcblockchain",
            "Allow both Java and C clients to use a shared protocol API.");
    backlog.appendChild(vcblockchainProtocol);

    var forwardSecrecy =
        createStory(
            "Enable forward secrecy in the protocol handshake",
            "This provides minimum security guarantees in the case of key " +
            "recovery.");
    backlog.appendChild(forwardSecrecy);

    var notificationServiceShell =
        createStory(
            "Notification Service Shell",
            "Create the shell for the notification service.");
    backlog.appendChild(notificationServiceShell);

    var blockNotificationRegNotificationService =
        createStory(
            "API to register for a block notification",
            "This is the notification-service specific implementation.");
    backlog.appendChild(blockNotificationRegNotificationService);

    var blockNotificationRegProtocolService =
        createStory(
            "Protocol Service provides block notification API",
            "The protocol service provides an API method to register for a " +
            "block-level notification.\n\n" +
            "The client can assert that a given block ID is the latest; when " +
            "this assertion fails, the client will receive an " +
            "invalidation.\n\n" +
            "The protocol service handles cleanup when the connection closes.");
    backlog.appendChild(blockNotificationRegProtocolService);

    var blockNotificationDataService =
        createStory(
            "Data Service sends a new block to the notification service",
            "This enables the block invalidation logic from canonization to " +
            "client updates, enabling client sentinels on block update.");
    backlog.appendChild(blockNotificationDataService);

    var mesonJavaLibBuild =
        createStory(
            "Meson for the Java Lib build",
            "Ensure that we can build the Java library using OSS components.");
    backlog.appendChild(mesonJavaLibBuild);

    var demo1Versioning =
        createStory(
            "Version tagging for Demo 1",
            "Ensure that there are official source versions for this " +
            "tutorial.");
    backlog.appendChild(demo1Versioning);

    var article1Overview =
        createStory(
            "Article 1: Blockchain Overview",
            "Overview of the OSS Blockchain Project.");
    backlog.appendChild(article1Overview);

    var article2Demo1 =
        createStory(
            "Article 2: Tutorial 1",
            "Tutorial for the first demo.");
    backlog.appendChild(article2Demo1);

    /** Project actions **/

    //Administrative tasks for setup.
    promote(createKanban, backlog, selected);
    promote(createKanban, selected, progress);
    promote(createKanban, progress, done);

    //Create Demo 1 release.
    var releaseDemo1Selected = createRelease("0.4.0", "Demo 1");
    selected.appendChild(releaseDemo1Selected);
    var releaseDemo1Progress = createRelease("0.4.0", "Demo 1");
    progress.appendChild(releaseDemo1Progress);
    var releaseDemo1Done = createRelease("0.4.0", "Demo 1");
    done.appendChild(releaseDemo1Done);

    //Stories for Demo 1
    promote(pubfileReader, backlog, releaseDemo1Selected);
    promote(privateKeyReader, backlog, releaseDemo1Selected);
    promote(improvedProtocolKeyImport, backlog, releaseDemo1Selected);
    promote(canonizationKeyControlAPI, backlog, releaseDemo1Selected);
    promote(improvedCanonizationKeyImport, backlog, releaseDemo1Selected);
    promote(canonizationBlockSigning, backlog, releaseDemo1Selected);
    promote(mesonJavaLibBuild, backlog, releaseDemo1Selected);
    promote(demo1Versioning, backlog, releaseDemo1Selected);
    promote(article1Overview, backlog, releaseDemo1Selected);
    promote(article2Demo1, backlog, releaseDemo1Selected);

    //Create Demo 2 release.
    var releaseDemo2Selected = createRelease("0.4.1", "Demo 2");
    backlog.appendChild(releaseDemo2Selected);
    var relaseDemo2Progress = createRelease("0.4.1", "Demo 2");
    var relaseDemo2Done = createRelease("0.4.1", "Demo 2");

    //Stories for Demo 2
    promote(vcblockchainProtocol, backlog, releaseDemo2Selected);
    promote(forwardSecrecy, backlog, releaseDemo2Selected);
    promote(notificationServiceShell, backlog, releaseDemo2Selected);
    promote(
        blockNotificationRegNotificationService, backlog, releaseDemo2Selected);
    promote(blockNotificationRegProtocolService, backlog, releaseDemo2Selected);
    promote(blockNotificationDataService, backlog, releaseDemo2Selected);

    //More stories for Demo 2
    var demo2Artifacts =
        createStory(
            "Define artifacts for Demo 2",
            "We need the artifacts for a device and the device state, " +
            "along with the transaction types.");
    releaseDemo2Selected.appendChild(demo2Artifacts);
    var templateParser =
        createStory(
            "Template format parser for vctool",
            "Allow certificates to be described via a template.");
    releaseDemo2Selected.appendChild(templateParser);
    var createCertificate =
        createStory(
            "Create certificate by template in vctool",
            "Simple checked method for creating a certificate defined by " +
            "a template in vctool.");
    releaseDemo2Selected.appendChild(createCertificate);
    var vctoolSubmit =
        createStory(
            "Submit transactions with vctool",
            "Submit transactions to a blockchain agent using vctool.");
    releaseDemo2Selected.appendChild(vctoolSubmit);
    var demo2client =
        createStory(
            "Create a client for demo 2",
            "This client runs on NetBSD and toggles a GPIO pin based on " +
            "device state transactions submitted to the blockchain.");
    releaseDemo2Selected.appendChild(demo2client);
    var demo2DriverBoard =
        createStory(
            "Create a driver board for demo 2",
            "The driver board powers the RPi and relay. It provides an " +
            "electrically isolated way to drive the relay from RPi's limited " +
            "GPIO pins.");
    releaseDemo2Selected.appendChild(demo2DriverBoard);

    //2020-08-05 - start progress on pubfileReader
    promote(pubfileReader, releaseDemo1Selected, releaseDemo1Progress);
}
