'use client';

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users, FileText, Calendar } from 'lucide-react';

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Politique de Confidentialité
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Protection et traitement de vos données personnelles chez EXFACTOR.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Introduction */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  EXFACTOR (SIREN : 948 694 757), société à responsabilité limitée à associé unique, 
                  dont le siège social est situé au 56 RUE de la Noise 92140 Clamart FRANCE, 
                  s'engage à protéger la confidentialité de vos données personnelles.
                </p>
                <p>
                  Cette politique de confidentialité vous informe sur la manière dont nous collectons, 
                  utilisons, stockons et protégeons vos données personnelles lorsque vous utilisez notre site web 
                  <strong> exfactor-batiment.fr</strong> ou nos services.
                </p>
              </div>
            </div>

            {/* Responsable du traitement */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsable du traitement</h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600">
                <p><strong>Dénomination :</strong> EXFACTOR</p>
                <p><strong>Forme juridique :</strong> SARLU (Société à responsabilité limitée à associé unique)</p>
                <p><strong>SIREN :</strong> 948 694 757</p>
                <p><strong>Adresse :</strong> 56 RUE de la Noise 92140 Clamart FRANCE</p>
                <p><strong>Email :</strong> <a href="mailto:exfactor.fr@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">exfactor.fr@gmail.com</a></p>
                <p><strong>Téléphone :</strong> <a href="tel:0605598897" className="text-blue-600 hover:text-blue-800 transition-colors">06 05 59 88 97</a></p>
              </div>
            </div>

            {/* Données collectées */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Données collectées</h2>
                </div>
              </div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Données d'identification</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse postale</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Données de navigation</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées</li>
                    <li>Durée de visite</li>
                    <li>Cookies techniques</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Données de projet</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Description du projet de rénovation</li>
                    <li>Budget estimé</li>
                    <li>Délais souhaités</li>
                    <li>Préférences techniques</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Finalités du traitement */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Finalités du traitement</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Nous utilisons vos données personnelles pour :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Répondre à vos demandes de devis et d'informations</li>
                  <li>Gérer la relation client et le suivi des projets</li>
                  <li>Améliorer nos services et notre site web</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                  <li>Prévenir la fraude et assurer la sécurité</li>
                  <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                </ul>
              </div>
            </div>

            {/* Base légale */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Base légale du traitement</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Le traitement de vos données personnelles est fondé sur :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>L'exécution d'un contrat</strong> : pour la réalisation de vos projets de rénovation</li>
                  <li><strong>L'intérêt légitime</strong> : pour l'amélioration de nos services et la gestion de la relation client</li>
                  <li><strong>Le consentement</strong> : pour l'envoi de communications marketing</li>
                  <li><strong>L'obligation légale</strong> : pour le respect des obligations comptables et fiscales</li>
                </ul>
              </div>
            </div>

            {/* Durée de conservation */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Durée de conservation</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Vos données sont conservées pendant :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Données clients</strong> : 10 ans après la fin de la relation contractuelle (garantie décennale)</li>
                  <li><strong>Données prospects</strong> : 3 ans à compter du dernier contact</li>
                  <li><strong>Données comptables</strong> : 10 ans conformément aux obligations légales</li>
                  <li><strong>Cookies</strong> : 13 mois maximum</li>
                </ul>
              </div>
            </div>

            {/* Destinataires */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Destinataires des données</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Vos données peuvent être transmises à :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Les collaborateurs d'EXFACTOR dans le cadre de leurs missions</li>
                  <li>Nos sous-traitants techniques (hébergement, maintenance)</li>
                  <li>Nos partenaires commerciaux (avec votre consentement)</li>
                  <li>Les autorités compétentes en cas d'obligation légale</li>
                </ul>
              </div>
            </div>

            {/* Vos droits */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos droits</h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
                  <li><strong>Droit de rectification</strong> : corriger vos données inexactes ou incomplètes</li>
                  <li><strong>Droit d'effacement</strong> : demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation</strong> : limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
                  <li><strong>Droit de retrait du consentement</strong> : retirer votre consentement à tout moment</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous à : 
                  <a href="mailto:exfactor.fr@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors ml-1">
                    exfactor.fr@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Sécurité */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Lock className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sécurité des données</h2>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Chiffrement des données sensibles</li>
                  <li>Accès sécurisé et authentification forte</li>
                  <li>Sauvegarde régulière des données</li>
                  <li>Formation du personnel à la protection des données</li>
                  <li>Audits de sécurité réguliers</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies et traceurs</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience de navigation :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Cookies techniques</strong> : nécessaires au fonctionnement du site</li>
                  <li><strong>Cookies analytiques</strong> : pour mesurer l'audience (avec votre consentement)</li>
                  <li><strong>Cookies de préférences</strong> : pour mémoriser vos choix</li>
                </ul>
                <p>
                  Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur 
                  ou notre bandeau de consentement.
                </p>
              </div>
            </div>

            {/* Réclamations */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Réclamations</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, 
                  vous avez le droit d'introduire une réclamation auprès de la CNIL :
                </p>
                <p>
                  <strong>Commission Nationale de l'Informatique et des Libertés (CNIL)</strong><br />
                  3 Place de Fontenoy - TSA 80715<br />
                  75334 PARIS CEDEX 07<br />
                  Téléphone : 01 53 73 22 22<br />
                  Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">www.cnil.fr</a>
                </p>
              </div>
            </div>

            {/* Modifications */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Modifications de la politique</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Cette politique de confidentialité peut être modifiée à tout moment. 
                  Nous vous informerons de toute modification substantielle par email ou via notre site web.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance 
                  des éventuelles modifications.
                </p>
              </div>
            </div>

            {/* Date de mise à jour */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Calendar className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-semibold text-gray-700">Dernière mise à jour</span>
              </div>
              <p className="text-gray-600">8 octobre 2024</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
