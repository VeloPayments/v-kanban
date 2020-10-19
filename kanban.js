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

function promotepri(item, prev, next) {
    prev.removeChild(item);
    next.insertBefore(item, next.childNodes[1]);
}

function prioritize(queue, item, placeAbove) {
    queue.insertBefore(item, placeAbove);
}

function createDivider() {
    var divider = document.createElement("div");

    var para1 = document.createElement("p");
    var hr1 = document.createElement("hr");
    var para2 = document.createElement("p");
    var hr2 = document.createElement("hr");
    var para3 = document.createElement("p");
    var hr3 = document.createElement("hr");

    divider.appendChild(para1);
    divider.appendChild(hr1);
    divider.appendChild(para2);
    divider.appendChild(hr2);
    divider.appendChild(para3);
    divider.appendChild(hr3);

    return divider;
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

    var vcblockchainProtocolHandshakeRequest =
        createStory(
            "Add handshake protocol request to vcblockchain",
            "Add handshake request to the vcblockchain protocol lib.");
    backlog.appendChild(vcblockchainProtocolHandshakeRequest);

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
    var releaseDemo2Progress = createRelease("0.4.1", "Demo 2");
    var releaseDemo2Done = createRelease("0.4.1", "Demo 2");

    //Stories for Demo 2
    promote(
        vcblockchainProtocolHandshakeRequest, backlog, releaseDemo2Selected);
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

    //2020-08-11 - add MITM mitigation in Java client story.
    var javaClientMITM =
        createStory(
            "MITM mitigation in Java client",
            "Java client does not check agentd public key, leading to " +
            "possible MITM attack.  Add public key check.");
    releaseDemo1Progress.appendChild(javaClientMITM);

    //2020-08-11 - promote javaClientMITM to Done
    promote(javaClientMITM, releaseDemo1Progress, releaseDemo1Done);

	//2020-08-13 - add vwbc library story.
    var vwbcRework = createStory(
        "Reworking the VWBC library",
        "Lots of stuff has changed in the WASM and vcblockchain world since " +
        " we wrote the original bindings, they needed rewriting and cleaning" +
		" up. This is the main tracking task for this");        
    progress.appendChild(vwbcRework); 

    //2020-08-13 - add Demo 3 release.
    var releaseDemo3Selected = createRelease("0.4.4", "Demo 3");
    backlog.appendChild(releaseDemo3Selected);
    var releaseDemo3Progress = createRelease("0.4.4", "Demo 3");
    var releaseDemo3Done = createRelease("0.4.4", "Demo 3");

    //2020-08-13 - promote vwbcRework to releaseDemo3Progress.
    progress.appendChild(releaseDemo3Progress);
    done.appendChild(releaseDemo3Done);
    promote(vwbcRework, progress, releaseDemo3Progress);

    //2020-08-14 - promote vcblockchainProtocolHandshakeRequest to in-progress.
    progress.insertBefore(releaseDemo2Progress, releaseDemo3Progress);
    promote(
        vcblockchainProtocolHandshakeRequest, releaseDemo2Selected,
        releaseDemo2Progress);

    //2020-08-15 - add story to cover http(s) proxy.
    var httpProtocolProxy = createStory(
        "HTTP(s) proxy for protocol",
        "This proxy allows wasm / JS web applications to connect to agentd " +
        "via a websockets connection.  This story is a placeholder and will " +
        "be expanded with smaller stories closer to planning.");
    releaseDemo3Selected.appendChild(httpProtocolProxy);

    //2020-08-16 - add VPR model check release
    var vprModelCheckReleaseSelected = createRelease("0.4.x", "VPR Model Check");
    backlog.appendChild(vprModelCheckReleaseSelected);
    var vprModelCheckReleaseProgress = createRelease("0.4.x", "VPR Model Check");
    var vprModelCheckReleaseDone = createRelease("0.4.x", "VPR Model Check");

    //2020-08-17 - promote demo1Versioning to done.
    promote(demo1Versioning, releaseDemo1Progress, releaseDemo1Done);

    //2020-08-18 - create stories for VPR model check release
    var vprModelCheckDisposable = createStory(
        "VPR Model checks for disposable",
        "Create / update model checks.");
    vprModelCheckReleaseSelected.appendChild(vprModelCheckDisposable);
    var vprModelCheckMallocAllocator = createStory(
        "VPR Model checks for malloc allocator",
        "Create / update model checks.");
    vprModelCheckReleaseSelected.appendChild(vprModelCheckMallocAllocator);
    var vprModelCheckDynamicArray = createStory(
        "VPR Model checks for dynamic array",
        "Create / update model checks.");
    vprModelCheckReleaseSelected.appendChild(vprModelCheckDynamicArray);
    var vprModelCheckBumpAllocator = createStory(
        "VPR Model checks for bump allocator",
        "Create / update model checks.");
    vprModelCheckReleaseSelected.appendChild(vprModelCheckBumpAllocator);
    var vprModelCheckHashMap = createStory(
        "VPR Model checks for hashmap",
        "Create / update model checks.");
    vprModelCheckReleaseSelected.appendChild(vprModelCheckHashMap);
    var vprModelCheckLinkedList = createStory(
        "VPR Model checks for linked list",
        "Create / update model checks.");
    vprModelCheckReleaseSelected.appendChild(vprModelCheckLinkedList);
    var vprModelCheckDoubleLinkedList = createStory(
        "VPR Model checks for double linked list",
        "Create / update model checks.");
    vprModelCheckReleaseSelected.appendChild(vprModelCheckDoubleLinkedList);
    var vprModelCheckAbstractFactory = createStory(
        "VPR Model checks for abstract factory",
        "Create / update model checks.");
    vprModelCheckReleaseSelected.appendChild(vprModelCheckAbstractFactory);
    var vprModelCheckBloomFilter = createStory(
        "VPR Model checks for bloom filter",
        "Create / update model checks.");
    vprModelCheckReleaseSelected.appendChild(vprModelCheckBloomFilter);
    var vprModelCheckCompare = createStory(
        "VPR Model checks for compare",
        "Create / update model checks.");
    vprModelCheckReleaseSelected.appendChild(vprModelCheckCompare);
    var vprModelCheckUUID = createStory(
        "VPR Model checks for uuid",
        "Create / update model checks.");
    vprModelCheckReleaseSelected.appendChild(vprModelCheckUUID);

    //2020-08-19 - split up protocol story.
    var vcblockchainProtocolHandshakeAck =
        createStory(
            "Add handshake ack to vcblockchain",
            "Add handshake ack to the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolHandshakeAck);
    var vcblockchainProtocolLatestBlockID =
        createStory(
            "Add get latest block id to vcblockchain",
            "Add get latest block id to the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolLatestBlockID);
    var vcblockchainProtocolBlockIDByHeight =
        createStory(
            "Add get block id by height to vcblockchain",
            "Add get block id by height to the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolBlockIDByHeight);
    var vcblockchainProtocolClose =
        createStory(
            "Add close request to vcblockchain",
            "Add close request to the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolClose);
    var vcblockchainProtocolTransactionSubmit =
        createStory(
            "Add transaction submit to vcblockchain",
            "Add transaction submit to the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolTransactionSubmit);
    var vcblockchainProtocolBlockGet =
        createStory(
            "Add block get to vcblockchain",
            "Add block get to the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolBlockGet);
    var vcblockchainProtocolBlockGetNextId =
        createStory(
            "Add block get next id to vcblockchain",
            "Add block get next id to the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolBlockGetNextId);
    var vcblockchainProtocolBlockGetPrevId =
        createStory(
            "Add block get prev id to vcblockchain",
            "Add block get prev id to the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolBlockGetPrevId);
    var vcblockchainProtocolTransactionGet =
        createStory(
            "Add transaction get to vcblockchain",
            "Add transaction get to the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolTransactionGet);
    var vcblockchainProtocolTransactionNextIDGet =
        createStory(
            "Add transaction get next id to vcblockchain",
            "Add transaction get next id to the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolTransactionNextIDGet);
    var vcblockchainProtocolTransactionPrevIDGet =
        createStory(
            "Add transaction get prev id to vcblockchain",
            "Add transaction get prev id to the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolTransactionPrevIDGet);
    var vcblockchainProtocolTransactionBlockIDGet =
        createStory(
            "Add transaction get block id to vcblockchain",
            "Add transaction get block id to the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolTransactionBlockIDGet);
    var vcblockchainProtocolArtifactFirstIDGet =
        createStory(
            "Add artifact first id get to vcblockchain",
            "Add artifact first id get to the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolArtifactFirstIDGet);
    var vcblockchainProtocolArtifactLastIDGet =
        createStory(
            "Add artifact last id get to vcblockchain",
            "Add artifact last id get to the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolArtifactLastIDGet);
    var vcblockchainProtocolStatusGet =
        createStory(
            "Add status get to vcblockchain",
            "Add status get the vcblockchain protocol lib.");
    releaseDemo2Selected.appendChild(vcblockchainProtocolStatusGet);

    //2020-08-20 - add 32k limit and unlimited stories.
    var cert32k =
        createStory(
            "Limit field payload sizes to 32k (reserve high bit)",
            "The reserved high bit ensures forward compatibility with " +
            "ulimitied payload sizes.");
    backlog.appendChild(cert32k);
    var certUnlimitedPayload =
        createStory(
            "Make the field size variable length for unlimited payload size",
            "The parser needs to be formally proven to always work with " +
            "these variable length field size.");
    backlog.appendChild(certUnlimitedPayload);

    //2020-08-21 - add code coverage cleanup task for ssock.
    var ssockCodeCoverage =
        createStory(
            "Increase branch coverage for vcblockchain ssock library",
            "Currently, there are not tests exercising all possible socket " +
            "error conditions in the read/write primitive I/O functions.");
    releaseDemo2Selected.appendChild(ssockCodeCoverage);

    //2020-08-22 - add suite id story.
    var suiteID =
        createStory(
            "Add crypto suite ID to the crypto suite structure",
            "For introspection purposes, the crypto suite ID should be " +
            "included in the crypto suite structure. This should match the " +
            "value encoded in the certificate.");
    releaseDemo2Progress.insertBefore(
        suiteID, vcblockchainProtocolHandshakeRequest);
    //Sort the "done" columns to make it more apparent what is being done now.
    done.insertBefore(releaseDemo2Done, createKanban);
    done.insertBefore(releaseDemo3Done, createKanban);
    done.insertBefore(releaseDemo1Done, createKanban);
    //complete suiteID story.
    promote(suiteID, releaseDemo2Progress, releaseDemo2Done);

    //2020-08-23 - add story for console logger
    var consoleLogger =
        createStory(
            "Add console logger for debugging.",
            "When agentd is in console mode, the logger should write to " +
            "the console, which should be piped to the supervisor.");
    releaseMaintenance1Selected.appendChild(consoleLogger);

    //2020-08-24 - add stories for making libraries and utils suite agnostic.
    var vccertSuiteAgonstic =
        createStory(
            "vccert should be crypto suite agnostic",
            "vccert should work for any vccrypt suite.");
    backlog.appendChild(vccertSuiteAgonstic);
    var vcblockchainSuiteAgnostic =
        createStory(
            "vcblockchain should be crypto suite agnostic",
            "vcblockchain should work with any vccrypt suite.");
    backlog.appendChild(vcblockchainSuiteAgnostic);
    var vctoolSuiteAgnostic =
        createStory(
            "vctool should be crypto suite agnostic",
            "vctool should work with any vccrypt suite.");
    backlog.appendChild(vctoolSuiteAgnostic);
    var agentdSuiteAgnostic =
        createStory(
            "agentd should be crypto suite agnostic",
            "agentd should work with any vccrypt suite.");
    backlog.appendChild(agentdSuiteAgnostic);
    var vwblockchainSuiteAgnostic =
        createStory(
            "vwblockchain should be crypto suite agnostic",
            "vwblockchain should work with any vccrypt suite.");
    backlog.appendChild(vwblockchainSuiteAgnostic);
    var vjblockchainSuiteAgnostic =
        createStory(
            "vjblockchain should be crypto suite agnostic",
            "vjblockchain should work with any vccrypt suite.");
    backlog.appendChild(vjblockchainSuiteAgnostic);

    //2020-08-25 - prioritize some stories in the queue for visualization
    prioritize(
        releaseDemo2Selected, vcblockchainProtocolHandshakeAck, forwardSecrecy);
    prioritize(
        releaseDemo2Selected, vcblockchainProtocolLatestBlockID,
        forwardSecrecy);
    prioritize(
        releaseDemo2Selected, vcblockchainProtocolTransactionSubmit,
        forwardSecrecy);
    prioritize(
        releaseDemo2Selected, vcblockchainProtocolBlockGet, forwardSecrecy);
    prioritize(
        releaseDemo2Selected, vcblockchainProtocolBlockGetNextId,
        forwardSecrecy);
    prioritize(
        releaseDemo2Selected, demo2client, forwardSecrecy);
    var release2DemoDivider = createDivider();
    prioritize(
        releaseDemo2Selected, release2DemoDivider, forwardSecrecy);

    //2020-08-25 - add vccrypt_buffer_move
    var vccryptBufferMove =
        createStory(
            "vccrypt_buffer_move",
            "This function adds move semantics to the vccrypt buffer.");
    releaseDemo2Progress.insertBefore(
        vccryptBufferMove, vcblockchainProtocolHandshakeRequest);

    //2020-08-26 - finish vccrypt_buffer_move
    promotepri(vccryptBufferMove, releaseDemo2Progress, releaseDemo2Done);

    //2020-08-27 - add story for hash_map refactor.
    var hashMapRefactor =
        createStory(
            "Refactor VPR hash_map",
            "Small changes needed to make it appropriate for the " +
            "notification service.");
    backlog.appendChild(hashMapRefactor);

    //2020-09-01 - complete vcblockchainProtocolHandshakeRequest and start
    //vcblockchainProtocolHandshakeAck
    promotepri(
        vcblockchainProtocolHandshakeRequest, releaseDemo2Progress,
        releaseDemo2Done);
    promotepri(
        vcblockchainProtocolHandshakeAck, releaseDemo2Selected,
        releaseDemo2Progress);

    //2020-09-02 - add ssockReadWriteAuthData story and start progress.
    var ssockReadWriteAuthData =
        createStory(
            "ssock read/write authed data",
            "Add ssock methods for reading / writing authenticated data.");
    releaseDemo2Selected.appendChild(ssockReadWriteAuthData);
    promotepri(
        ssockReadWriteAuthData, releaseDemo2Selected, releaseDemo2Progress);

    //2020-09-02 - add story for test coverage in vcblockchain protocol
    var unhappyPathProtocolTesting =
        createStory(
            "add unhappy path testing for vcblockchain protocol",
            "skipped for fast demo turn-around.");
    releaseDemo2Selected.appendChild(unhappyPathProtocolTesting);
    //2020-09-02 - add story for address sanitizer cleanup in vccert
    var vccertAddressSanitizer =
        createStory(
            "fix address sanitizer error in vccert tests",
            "two tests aren't properly cleaning up memory afterward.");
    releaseDemo2Selected.appendChild(vccertAddressSanitizer);

    //2020-09-03 - add story for Cortex-M bring-up.
    var cortexMPort =
        createStory(
            "Port Demo2 to custom CortexM demo board",
            "ESP8266 wifi module to communicate with blockchain agent.");
    backlog.appendChild(cortexMPort);

    //2020-09-04 - promote ssock story to done.
    promotepri(
        ssockReadWriteAuthData, releaseDemo2Progress, releaseDemo2Done);

    //2020-09-05 - add story to investigate IV serialization
    var ivSerialization =
        createStory(
            "Investigate IV serialization in protocol",
            "Verify that the protocol is treating the IV as big-endian.");
    releaseDemo2Selected.appendChild(ivSerialization);

    //2020-09-06 - add story to increase branch coverage for protocol library.
    var protocolBranchCoverage =
        createStory(
            "Increase branch coverage for protocol library",
            "Currently, implemented protocol methods have happy path testing.");
    releaseDemo2Selected.appendChild(protocolBranchCoverage);

    //2020-09-07 - add story to investigate encryption at rest.
    var encryptionAtRest =
        createStory(
            "Investigate data service encryption at rest",
            "Possible tie-in with auth service for key management.");
    backlog.appendChild(encryptionAtRest);

    //2020-09-08 - more stories.
    var constSecret =
        createStory(
            "Make secret const in ssock.h",
            "This will require making changes to the vccrypt API.");
    releaseDemo2Selected.appendChild(constSecret);
    var vctoolPrivateKeyStartup =
        createStory(
            "vctool option to bootstrap agentd with an encrypted private key",
            "This story handles the vctool portion of this change; vctool " +
            "decrypts a private key and passes this to agentd.");
    backlog.appendChild(vctoolPrivateKeyStartup);
    var agentdStartupWithVCTool =
        createStory(
            "agentd can be started from agentd with private key passthrough",
            "On startup, an option allows a private key to be read from " +
            "the caller, i.e. vctool.");
    backlog.appendChild(agentdStartupWithVCTool);
    var agentdSupervisorStability =
        createStory(
            "Harden the supervisor process so it always restarts agentd",
            "Currently, there are some edge cases where the supervisor stops.");
    backlog.appendChild(agentdSupervisorStability);

    //2020-09-15 - recvresp and decodeHeader stories.
    var recvresp =
        createStory(
            "Add receive response method to blockchain protocol",
            "A generic dispatch receive is more useful for async API work.");
    releaseDemo2Selected.insertBefore(
        recvresp, releaseDemo2Selected.childNodes[1]);
    var decodeHeader =
        createStory(
            "Add response decode header method for response decoding",
            "This method is used for client decode and dispatch.");
    releaseDemo2Selected.appendChild(decodeHeader);
    promotepri(decodeHeader, releaseDemo2Selected, releaseDemo2Progress);

    //2020-09-16 - decodeHeader completed; recvresp started
    promotepri(decodeHeader, releaseDemo2Progress, releaseDemo2Done);
    promotepri(recvresp, releaseDemo2Selected, releaseDemo2Progress);

    //2020-09-16 - recvresp completed.
    promotepri(recvresp, releaseDemo2Progress, releaseDemo2Done);

    //2020-09-17 - complete handshake ack and started get latest block id
    promotepri(
        vcblockchainProtocolHandshakeAck, releaseDemo2Progress,
        releaseDemo2Done);
    promotepri(
        vcblockchainProtocolLatestBlockID, releaseDemo2Selected,
        releaseDemo2Progress);

    //2020-09-18 - start progress on address sanitizer fix story.
    promotepri(
        vccertAddressSanitizer, releaseDemo2Selected, releaseDemo2Progress);

    //2020-09-19 - create story to track crash condition in bloom filter with
    //ASAN
    var bloomFilterASANSegv =
        createStory(
            "Track down ASAN segfault in VPR bloom filter",
            "It appears that a unit test is causing ASAN to segfault.");
    releaseDemo2Selected.appendChild(bloomFilterASANSegv);

    //2020-09-19 - completed address sanitizer fix story.
    promotepri(
        vccertAddressSanitizer, releaseDemo2Progress, releaseDemo2Done);

    //2020-09-21 - completed latest block id get; start transaction submit.
    promotepri(
        vcblockchainProtocolLatestBlockID, releaseDemo2Progress,
        releaseDemo2Done);
    promotepri(
        vcblockchainProtocolTransactionSubmit, releaseDemo2Selected,
        releaseDemo2Progress);

    //2020-09-21 - add story to fix the IV numbering.
    var ivNumbering =
        createStory(
            "Fix IV numbering in vcblockchain to match protocol spec",
            "Currently, both client and server IVs are set to 1, which is " +
            "incorrect.");
    releaseDemo2Selected.appendChild(ivNumbering);
    prioritize(releaseDemo2Selected, ivNumbering, vcblockchainProtocolBlockGet);

    //2020-09-22 - complete transaction submit; start iv numbering.
    promotepri(
        vcblockchainProtocolTransactionSubmit, releaseDemo2Progress,
        releaseDemo2Done);
    promotepri(
        ivNumbering, releaseDemo2Selected, releaseDemo2Progress);

    //2020-09-22 - complete iv numbering; start block get
    promotepri(
        ivNumbering, releaseDemo2Progress, releaseDemo2Done);
    promotepri(
        vcblockchainProtocolBlockGet, releaseDemo2Selected,
        releaseDemo2Progress);

    //2020-09-22 - create and start story for fixing byteswap in vcblockchain
    var vcblockchainByteswap =
        createStory(
            "Fix byteswap naming in vcblockchain",
            "Current names conflict with Linux libc.");
    releaseDemo2Selected.appendChild(vcblockchainByteswap);
    promotepri(
        vcblockchainByteswap, releaseDemo2Selected, releaseDemo2Progress);

    //2020-09-22 - complete byteswap story.
    promotepri(
        vcblockchainByteswap, releaseDemo2Progress, releaseDemo2Done);

    //2020-09-22 - complete block get; start block get next id.
    promotepri(
        vcblockchainProtocolBlockGet, releaseDemo2Progress, releaseDemo2Done);
    promotepri(
        vcblockchainProtocolBlockGetNextId, releaseDemo2Selected,
        releaseDemo2Progress);

    //2020-09-22 - complete block get next id; start demo 2 client.
    promotepri(
        vcblockchainProtocolBlockGetNextId, releaseDemo2Progress,
        releaseDemo2Done);
    promotepri(demo2client, releaseDemo2Selected, releaseDemo2Progress);

    //2020-09-25 - create release codenamed Whitsun
    var releaseWhitsunSelected = createRelease("0.4.3", "Whitsun");
    selected.appendChild(releaseWhitsunSelected);
    prioritize(selected, releaseWhitsunSelected, releaseDemo1Selected);
    var releaseWhitsunProgress = createRelease("0.4.3", "Whitsun");
    progress.appendChild(releaseWhitsunProgress);
    prioritize(progress, releaseWhitsunProgress, releaseDemo1Progress);
    var releaseWhitsunDone = createRelease("0.4.3", "Whitsun");
    done.appendChild(releaseWhitsunDone);
    prioritize(done, releaseWhitsunDone, releaseDemo2Done);

    //2020-09-25 - create release codenamed Whitsun
    var javaFutureRemoval =
        createStory(
            "Remove futures from Java API",
            "Futures are just confusing Java developers. We will replace " +
            "the synchronous API with an async one later.");
    releaseWhitsunSelected.appendChild(javaFutureRemoval);
    var encryptedFieldMAC =
        createStory(
            "Add MAC to encrypted fields",
            "Add a message authentication code to encrypted cert fields.");
    releaseWhitsunSelected.appendChild(encryptedFieldMAC);
    var increasedDBSize =
        createStory(
            "Increase the default database size in agentd",
            "This gives us breathing room for larger use cases.");
    releaseWhitsunSelected.appendChild(increasedDBSize);
    var simpleEncryptionAtRest =
        createStory(
            "Add encryption at rest to the data service",
            "Use a configurable private key stored in a private cert.");
    releaseWhitsunSelected.appendChild(simpleEncryptionAtRest);
    var backupd =
        createStory(
            "Create backupd",
            "This service continually updates an encrypted backup.");
    releaseWhitsunSelected.appendChild(backupd);
    var releaseWhitsunSelectedDivider = createDivider();
    releaseWhitsunSelected.appendChild(releaseWhitsunSelectedDivider);
    var adaptiveDBResizing =
        createStory(
            "Add code to adaptively resize the database",
            "This will automatically grow databases.");
    releaseWhitsunSelected.appendChild(adaptiveDBResizing);
    var restoreAPI =
        createStory(
            "Create a restore API for agentd",
            "agentd can be booted into a special mode that supports a " +
            "restore.");
    releaseWhitsunSelected.appendChild(restoreAPI);
    var vctoolRestore =
        createStory(
            "Add support to vctool for restoring a backup",
            "vctool can take a backup file and a private key to restore " +
            "agentd");
    releaseWhitsunSelected.appendChild(vctoolRestore);
    //move the forward secrecy story to Whitsun
    releaseWhitsunSelected.appendChild(forwardSecrecy);

    //2020-09-25 - start progress on javaFutureRemoval
    promotepri(
        javaFutureRemoval, releaseWhitsunSelected, releaseWhitsunProgress);

    //2020-09-25 - completed javaFutureRemoval; started encryptedFieldMAC
    promotepri(
        javaFutureRemoval, releaseWhitsunProgress, releaseWhitsunDone);
    promotepri(
        encryptedFieldMAC, releaseWhitsunSelected, releaseWhitsunProgress);

    //2020-09-25 - more cleanup stories
    var monotonicOffset =
        createStory(
            "Monotonic offset and dead letter queue for protocol service",
            "Offsets should increase in a monotonic way, and there should " +
            "be dead letter handling.");
    releaseWhitsunSelected.appendChild(monotonicOffset);
    var ivRejection =
        createStory(
            "Large IV rejection",
            "When the IV gets too large, the connection should be terminated");
    releaseWhitsunSelected.appendChild(ivRejection);
    var pqRejection =
        createStory(
            "Process queue rejection",
            "Duplicate transaction ids on the process queue are rejected.");
    releaseWhitsunSelected.appendChild(pqRejection);
    var basicAttestation =
        createStory(
            "A basic attestation service",
            "<ul><li>Process queue items are checked against DB " +
                "constraints.</li>" +
            "<li>Certs pass basic checks (e.g. next in line, signed).</li>" +
            "</ul>");
    releaseWhitsunSelected.appendChild(basicAttestation);

    //2020-09-26 - start progress on backupd
    promotepri(
        backupd, releaseWhitsunSelected, releaseWhitsunProgress);

    //2020-09-28 - start progress on macos vjblockchain build
    var vjblockchainMacOS =
        createStory(
            "Create MacOS build for vjblockchain",
            "Set up automation to repeat this one-off build process.");
    releaseWhitsunSelected.appendChild(vjblockchainMacOS);
    promotepri(
        vjblockchainMacOS, releaseWhitsunSelected, releaseWhitsunProgress);

    //2020-09-28 - complete vjblockchain build story.
    promotepri(
        vjblockchainMacOS, releaseWhitsunProgress, releaseWhitsunDone);

    //2020-09-30 - add story to cover refactor of random service and cprng
    var randomServiceRefactor =
        createStory(
            "Refactor the random service to handle multiple connections.",
            "Originally, the randomservice was meant to be unique per " +
            "service requiring access to the system cprng. However, with " +
            "encryption at rest, each data service instance will need access " +
            "to an entropy source. As such, it's better to have a single " +
            "random service.");
    releaseWhitsunSelected.appendChild(randomServiceRefactor);
    prioritize(
        releaseWhitsunSelected, randomServiceRefactor, simpleEncryptionAtRest);
    var fortunacprng =
        createStory(
            "AES2X256 implementation of Fortuna",
            "The data service will need to create cryptographically random " +
            "data at a rate that is potentially faster than it can receive " +
            "entropy from the system source. A local Fortuna implementation " +
            "will ensure that it can produce good cryptographically random " +
            "initialization vector values while being periodically reseeded " +
            "by the random service.");
    releaseWhitsunSelected.appendChild(fortunacprng);
    prioritize(
        releaseWhitsunSelected, fortunacprng, simpleEncryptionAtRest);

    //2020-10-01 - start progress on ASAN segfault story.
    promotepri(
        bloomFilterASANSegv, releaseDemo2Selected, releaseWhitsunSelected);
    promotepri(
        bloomFilterASANSegv, releaseWhitsunSelected, releaseWhitsunProgress);

    //2020-10-04 - complete ASAN segfault story.
    promotepri(bloomFilterASANSegv, releaseWhitsunProgress, releaseWhitsunDone);

    //2020-10-05 - start progress on database size story.
    promotepri(increasedDBSize, releaseWhitsunSelected, releaseWhitsunProgress);

    //2020-10-06 - complete the database size story.
    promotepri(increasedDBSize, releaseWhitsunProgress, releaseWhitsunDone);

    //2020-10-06 - create and start progress on padding story.
    var blockPadding =
        createStory(
            "PKCS#7 padding for block cipher plaintext",
            "So we can use AES-2X-256-CBC for encrypting arbitrary length " +
            "data.");
    releaseWhitsunSelected.appendChild(blockPadding);
    promotepri(blockPadding, releaseWhitsunSelected, releaseWhitsunProgress);

    //2020-10-06 - complete padding story.
    promotepri(blockPadding, releaseWhitsunProgress, releaseWhitsunDone);

    //2020-10-19 - create and start progress on crypto suite mock story.
    var cryptoSuiteMock =
        createStory(
            "Create a mock crypto suite",
            "This is needed for testing backupd and encryption at rest.");
    releaseWhitsunSelected.appendChild(cryptoSuiteMock);
    promotepri(cryptoSuiteMock, releaseWhitsunSelected, releaseWhitsunProgress);
}
