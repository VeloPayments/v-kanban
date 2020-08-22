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
}
