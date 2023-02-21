//Dependency Inversion Principle
var FrontendDeveloper = /** @class */ (function () {
    function FrontendDeveloper() {
    }
    FrontendDeveloper.prototype.develop = function () {
        this.writeTypescriptCode();
    };
    FrontendDeveloper.prototype.writeTypescriptCode = function () {
    };
    return FrontendDeveloper;
}());
var BackendDeveloper = /** @class */ (function () {
    function BackendDeveloper() {
    }
    BackendDeveloper.prototype.develop = function () {
        this.writeJavaCode();
    };
    BackendDeveloper.prototype.writeJavaCode = function () {
    };
    return BackendDeveloper;
}());
var SoftwareProject = /** @class */ (function () {
    function SoftwareProject() {
    }
    SoftwareProject.prototype.createProject = function () {
        this.developers.forEach(function (developer) {
            developer.develop();
        });
    };
    return SoftwareProject;
}());
