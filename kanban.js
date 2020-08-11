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

    //2020-08-05 - add descriptive errors task to Demo 1 release tracker.
    var protocolDescriptiveErrors =
        createStory(
            "Descriptive protocol errors for Java API",
            "Ensure that handshake and authentication errors throw " +
            "descriptive exceptions, so the user can figure out why " +
            "handshakes failed.");
    releaseDemo1Selected.appendChild(protocolDescriptiveErrors);

    //2020-08-06 - add stories around log service for agentd
    //Create Maintenance 1 release
    var releaseMaintenance1Selected = createRelease("0.4.2", "Maintenance 1");
    backlog.appendChild(releaseMaintenance1Selected);
    var releaseMaintenance1Progress = createRelease("0.4.2", "Maintenance 1");
    var releaseMaintenance1Done = createRelease("0.4.2", "Maintenance 1");

    var logServiceCreation =
        createStory(
            "Create log service for agentd",
            "Enables logging so there is some ops visibility of agentd's " +
            "behavior.");
    releaseMaintenance1Selected.appendChild(logServiceCreation);
    var supervisorAssignsLogServiceToRandomServices =
        createStory(
            "Supervisor Assigns Log Service to Random Services",
            "The random services have a live logger service socket.");
    releaseMaintenance1Selected.appendChild(
        supervisorAssignsLogServiceToRandomServices);
    var randomServiceLogging =
        createStory(
            "Enable logging in the random service",
            "The random service logs to the log service.");
    releaseMaintenance1Selected.appendChild(randomServiceLogging);
    var supervisorAssignsLogServiceToListenerService =
        createStory(
            "Supervisor Assigns Log Service to Listener Service",
            "The listener service has a live logger service socket.");
    releaseMaintenance1Selected.appendChild(
        supervisorAssignsLogServiceToListenerService);
    var listenerServiceLogging =
        createStory(
            "Enable logging in the listener service",
            "The listener service logs to the log service.");
    releaseMaintenance1Selected.appendChild(listenerServiceLogging);
    var supervisorAssignsLogServiceToDataServices =
        createStory(
            "Supervisor Assigns Log Service to Data Services",
            "The data services have a live logger service socket.");
    releaseMaintenance1Selected.appendChild(
        supervisorAssignsLogServiceToDataServices);
    var dataServiceLogging =
        createStory(
            "Enable logging in the data service",
            "The data service logs to the log service.");
    releaseMaintenance1Selected.appendChild(dataServiceLogging);
    var supervisorAssignsLogServiceToProtocolService =
        createStory(
            "Supervisor Assigns Log Service to Protocol Service",
            "The protocol service has a live logger service socket.");
    releaseMaintenance1Selected.appendChild(
        supervisorAssignsLogServiceToProtocolService);
    var protocolServiceLogging =
        createStory(
            "Enable logging in the protocol service",
            "The protocol service logs to the log service.");
    releaseMaintenance1Selected.appendChild(protocolServiceLogging);
    var supervisorAssignsLogServiceToAuthService =
        createStory(
            "Supervisor Assigns Log Service to Auth Service",
            "The auth service has a live logger service socket.");
    releaseMaintenance1Selected.appendChild(
        supervisorAssignsLogServiceToAuthService);
    var authServiceLogging =
        createStory(
            "Enable logging in the auth service",
            "The auth service logs to the log service.");
    releaseMaintenance1Selected.appendChild(authServiceLogging);
    var supervisorAssignsLogServiceToCanonizationService =
        createStory(
            "Supervisor Assigns Log Service to Canonization Service",
            "The canonization service has a live logger service socket.");
    releaseMaintenance1Selected.appendChild(
        supervisorAssignsLogServiceToCanonizationService);
    var canonizationServiceLogging =
        createStory(
            "Enable logging in the canonization service",
            "The canonization service logs to the log service.");
    releaseMaintenance1Selected.appendChild(canonizationServiceLogging);

    //2020-08-06 - promote pubfileReader story to Done.
    //           - start progress on privateKeyReader story.
    promote(pubfileReader, releaseDemo1Progress, releaseDemo1Done);
    promote(privateKeyReader, releaseDemo1Selected, releaseDemo1Progress);

    //2020-08-07 - promote privateKeyReader story to Done.
    //           - start progress on improvedProtocolKeyImport story.
    promote(privateKeyReader, releaseDemo1Progress, releaseDemo1Done);
    promote(
        improvedProtocolKeyImport, releaseDemo1Selected, releaseDemo1Progress);

    //2020-08-07 - promote improvedProtocolKeyImport story to Done.
    //           - start progress on canonizationKeyControlAPI story.
    promote(improvedProtocolKeyImport, releaseDemo1Progress, releaseDemo1Done);
    promote(
        canonizationKeyControlAPI, releaseDemo1Selected, releaseDemo1Progress);

    //2020-08-08 - add story for canonization service requirements
    var canonizationServiceRequirePrivateKey =
        createStory(
            "Canonization Service Requires Private Key to Start",
            "<p>Add check to canonization service to ensure that a private " +
            "key has been set before it can successfully start.</p>" +
            "<p>This story requires that the supervisor sets the private key " +
            "before it can be started.</p>");
    releaseDemo1Selected.appendChild(canonizationServiceRequirePrivateKey);

    //2020-08-08 - add bug fix for canonization service configure.
    var canonizationServiceBugfixConfigureError =
        createStory(
            "BUGFIX - Canonization Service Configure control returns wrong " +
            "method code",
            "The Configure Control API method returns the wrong method code.");
    releaseDemo1Selected.appendChild(canonizationServiceBugfixConfigureError);

    //2020-08-08 - clean up ups_private_key struct.
    var upsPrivateKeyStructCleanup =
        createStory(
            "Clean up ups_private_key struct",
            "Remove unused members.");
    releaseDemo1Selected.appendChild(upsPrivateKeyStructCleanup);

    //2020-08-08 - promote canonizationKeyControlAPI story to Done.
    //           - start progress on upsPrivateKeyStructCleanup story.
    promote(canonizationKeyControlAPI, releaseDemo1Progress, releaseDemo1Done);
    promote(
        upsPrivateKeyStructCleanup, releaseDemo1Selected, releaseDemo1Progress);

    //2020-08-08 - promote upsPrivateKeyStructCleanup story to Done.
    //           - start progress on canonizationServiceBugfixConfigureError.
    promote(upsPrivateKeyStructCleanup, releaseDemo1Progress, releaseDemo1Done);
    promote(
        canonizationServiceBugfixConfigureError, releaseDemo1Selected,
        releaseDemo1Progress);

    //2020-08-08 - promote canonizationServiceBugfixConfigureError to Done.
    //           - start progress on improvedCanonizationKeyImport.
    promote(
        canonizationServiceBugfixConfigureError, releaseDemo1Progress,
        releaseDemo1Done);
    promote(
        improvedCanonizationKeyImport, releaseDemo1Selected,
        releaseDemo1Progress);

    //2020-08-08 - promote improvedCanonizationKeyImport to Done.
    //           - start progress on canonizationServiceRequirePrivateKey.
    promote(
        improvedCanonizationKeyImport, releaseDemo1Progress, releaseDemo1Done);
    promote(
        canonizationServiceRequirePrivateKey, releaseDemo1Selected,
        releaseDemo1Progress);

    //2020-08-08 - promote canonizationServiceRequirePrivateKey to Done.
    //           - start progress on canonizationBlockSigning.
    promote(
        canonizationServiceRequirePrivateKey, releaseDemo1Progress,
        releaseDemo1Done);
    promote(
        canonizationBlockSigning, releaseDemo1Selected, releaseDemo1Progress);

    //2020-08-10 - promote canonizationBlockSigning to Done.
    //           - start progress on protocolDescriptiveErrors.
    promote(
        canonizationBlockSigning, releaseDemo1Progress, releaseDemo1Done);
    promote(
        protocolDescriptiveErrors, releaseDemo1Selected, releaseDemo1Progress);

    //2020-08-11 - promote protocolDescriptiveErrors to Done.
    //           - start progress on demo1Versioning.
    promote(
        protocolDescriptiveErrors, releaseDemo1Progress, releaseDemo1Done);
    promote(
        demo1Versioning, releaseDemo1Selected, releaseDemo1Progress);

    //2020-08-11 - add demo 2 tasks to selected for development.
    promote(
        releaseDemo2Selected, backlog, selected);
}
